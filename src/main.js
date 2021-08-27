import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './core/filters'
import axios from 'axios';
import VueAxios from 'vue-axios';
import dotenv from 'dotenv';

Vue.config.productionTip = false;
dotenv.config();

Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
