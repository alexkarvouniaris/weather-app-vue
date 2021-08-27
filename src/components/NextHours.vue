<template>
  <div class="main">
    <v-card class="card-width">
      <v-card-title>Next Hours</v-card-title>
      <v-divider></v-divider>
      <div class="container-hours-1 scrollX">
        <div v-for="hour in city" :key="hour.dt">
          <div class="container-hours-2 mx-2">
            <div class="pb-1">{{ hour.temp.toFixed(0) }} &deg;</div>
            <div class="dec">{{ hour.humidity }}%</div>
            <div v-for="w in hour.weather" :key="w.id">
              <v-img
                max-height="50px"
                max-width="50px"
                v-bind:src="w.icon | toWeatherIcon"
              ></v-img>
            </div>
            <div class="text-center">{{ hour.dt | toTime }}</div>
            <v-divider vertical></v-divider>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NextHours",
  props: ["city", "coordinates"],
};
</script>

<style scoped>
.container-hours-1 {
  display: flex;
  flex-direction: row;
  padding: 20px 0 20px 0;
}

.container-hours-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mx-2 {
  margin: 0px 20px 0px 20px;
}

.dec {
  color: #1e88e5;
}

.pb-1 {
  padding-bottom: 10px;
}
</style>