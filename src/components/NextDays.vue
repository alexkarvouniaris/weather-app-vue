<template>
  <div class="main pb-8">
    <v-card class="card-width">
      <v-card-title>Next 5 Days</v-card-title>
      <v-divider></v-divider>
      <div class="container-days-1">
        <div v-for="(day, index) in city" :key="day.dt">
          <div v-if="index > 0 && index <= 5" class="container-days-2">
            <div v-for="w in day.weather" :key="'d2' + w.id">
              <v-img
                max-height="50px"
                max-width="50px"
                v-bind:src="w.icon | toWeatherIcon"
              ></v-img>
            </div>
            <div
              class="container-days-3 px-3"
              v-for="w in day.weather"
              :key="'d3' + w.id"
            >
              <span
                ><h4>{{ day.dt | toDate }}</h4></span
              >
              <span class="secondary-text"
                >{{ w.main }}, {{ w.description }}</span
              >
            </div>
            <div class="container-days-4">
              <h5>{{ day.temp.day.toFixed(0) }} &deg;</h5>
              <h5 class="px-1">{{ day.temp.night.toFixed(0) }} &deg;</h5>
            </div>
          </div>
          <v-divider></v-divider>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NextDays",
  props: ["city", "coordinates"],
};
</script>

<style lang="scss" scoped>
.container-days-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-days-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0 10px 0;
  justify-content: center;
}

.container-days-3 {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.container-days-4 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.px-3 {
  padding: 0 30px 0 30px;
  width: 180px;
}

.px-1 {
  padding: 0 10px 0 10px;
}

.pb-8 {
  padding-bottom: 80px !important;
}
</style>
