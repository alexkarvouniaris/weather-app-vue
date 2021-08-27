<template>
  <div>
    <v-toolbar fixed color="#1E88E5" dense dark>
      <v-toolbar-title>Simple Weather</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col cols="6" sm="4" md="3">
        <v-slide-x-transition>
          <v-autocomplete
            :items="cities"
            :filter="customFilter"
            dense
            solo
            light
            hide-details
            item-text="city_name"
            label="Search city.."
            v-show="toggle"
            return-object
            v-model="selectedCity"
            @change="selected"
            data-app
          ></v-autocomplete>
        </v-slide-x-transition>
      </v-col>
      <v-btn icon v-on:click="toggle = !toggle">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { getCities } from "../core/data.service";
export default {
  data() {
    return {
      toggle: false,
      cities: [],
      coords: { name: null, lat: null, lon: null },
      selectedCity: {},
    };
  },
  methods: {
    getCitiesFromService() {
      this.cities = getCities();
    },
    customFilter(item, queryText, itemText) {
      const text = item.city_name.toLowerCase();
      const searchText = queryText.toLowerCase();

      return text.indexOf(searchText) > -1;
    },
    selected() {
      this.coords = {
        name: this.selectedCity.city_name,
        lat: this.selectedCity.lat.toFixed(2),
        lon: this.selectedCity.lon.toFixed(2),
      };
      this.$emit('citySelected', this.coords);
    },
  },
  mounted() {
    this.getCitiesFromService();
  },
};
</script>
