import Vue from 'vue';
import cities from '../data/cities_20000.json'

const API_KEY = 'INSERT_WEATHER_API_HERE';
const API_URL_HEAD = 'https://api.openweathermap.org/data/2.5/onecall?';
const API_URL_BODY = `&exclude=current,minutely,alerts&units=metric&appid=${API_KEY}`;

export async function getRioData() {
    const lat = '-22.90';
    const lon = '-43.20';
    return Vue.axios.get(`${API_URL_HEAD}lat=${lat}&lon=${lon}${API_URL_BODY}`).catch(error => {
        throw new Error(`Server Error: ${error}`);
    })
}

export async function getBeijingData() {
    const lat = '39.90';
    const lon = '116.39';
    return Vue.axios.get(`${API_URL_HEAD}lat=${lat}&lon=${lon}${API_URL_BODY}`).catch(error => {
        throw new Error(`Server Error: ${error}`);
    }) 
}

export async function getLAData() {
    const lat = '34.02';
    const lon = '-118.17';
    return Vue.axios.get(`${API_URL_HEAD}lat=${lat}&lon=${lon}${API_URL_BODY}`).catch(error => {
        throw new Error(`Server Error: ${error}`);
    }) 
}

export async function getSelectedCityData(selected_city_lat, selected_city_lon) {
    const lat = selected_city_lat;
    const lon = selected_city_lon;
    return Vue.axios.get(`${API_URL_HEAD}lat=${lat}&lon=${lon}${API_URL_BODY}`).catch(error => {
        throw new Error(`Server Error: ${error}`);
    }) 
}

export function IconService(icon) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

export function getCities() {
    return cities;
}