<template>
  <div>
    <v-app>
      <AppBar v-on:citySelected="cityChanged"/>
      <MainScreen :coords="coordinates"/>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import MainScreen from "./components/MainScreen.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    AppBar,
    MainScreen,
    Footer,
  },

  data: () => ({
    coordinates: {}
  }),
  methods: {
    cityChanged(coords) {
      this.coordinates = coords;
    }
  }
};
</script>

<style lang="scss">
body,
html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.main {
  display: flex;
  justify-content: center;
  padding: 30px 0 20px 0;
}

.card-width {
  min-width: 340px;
  max-width: 340px;
}

.secondary-text {
  color: #919392;
}

.scrollX {
  overflow-x: auto;
}

.text-center {
  text-align: center;
}
</style>
