<template>
  <div>
    <v-tabs v-model="tab" grow show-arrows>
      <v-tabs-slider color="#EF6C00"></v-tabs-slider>
      <v-tab key="tab1"> Rio de Janeiro </v-tab>
      <v-tab key="tab2">Beijing</v-tab>
      <v-tab key="tab3">Los Angeles</v-tab>
      <v-tab
        v-if="!Object.values(coords).every((x) => x === null)"
        key="tab4"
        >{{ coords.name }}</v-tab
      >
    </v-tabs>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item key="tab1">
        <NextHours :city="hourlyRio" />
        <NextDays :city="dailyRio" />
      </v-tab-item>
      <v-tab-item key="tab2">
        <NextHours :city="hourlyBeijing" />
        <NextDays :city="dailyBeijing" />
      </v-tab-item>
      <v-tab-item key="tab3">
        <NextHours :city="hourlyLA" />
        <NextDays :city="dailyLA" />
      </v-tab-item>
      <v-tab-item key="tab4">
        <NextHours :city="hourlySelected" />
        <NextDays :city="dailySelected" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import NextHours from "./NextHours.vue";
import NextDays from "./NextDays.vue";
import {
  getRioData,
  getBeijingData,
  getLAData,
  getSelectedCityData,
} from "../core/data.service";

export default {
  name: "MainScreen",
  props: ["coords"],
  components: {
    NextHours,
    NextDays,
  },
  data() {
    return {
      tab: null,
      dailyRio: null,
      hourlyRio: null,
      dailyBeijing: null,
      hourlyBeijing: null,
      dailyLA: null,
      hourlyLA: null,
      dailySelected: null,
      hourlySelected: null,
    };
  },
  methods: {
    getRioDataFromService() {
      getRioData().then((response) => {
        this.dailyRio = response.data.daily;
        this.hourlyRio = response.data.hourly;
      });
    },
    getBeijingDataFromService() {
      getBeijingData().then((response) => {
        this.dailyBeijing = response.data.daily;
        this.hourlyBeijing = response.data.hourly;
      });
    },
    getLADataFromService() {
      getLAData().then((response) => {
        this.dailyLA = response.data.daily;
        this.hourlyLA = response.data.hourly;
      });
    },
    getSelectedCityDataFromService() {
      getSelectedCityData(this.coords.lat, this.coords.lon).then((response) => {
        this.dailySelected = response.data.daily;
        this.hourlySelected = response.data.hourly;
      });
    }
  },
  mounted() {
    this.getRioDataFromService();
    this.getBeijingDataFromService();
    this.getLADataFromService();
  },
  watch: {
    coords: function (newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
      this.getSelectedCityDataFromService();
    },
  },
};
</script>

<style lang="scss" scoped>
.width {
  width: 50%;
}

.container-home-1 {
  display: flex;
  justify-content: center;
}
</style>