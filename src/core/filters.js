import Vue from 'vue';

Vue.filter('toTime', function (timestamp) {
    if (!timestamp) return ''
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleString('en-US', { hour12: true, timeStyle: 'short' })
    return formattedDate;
})

Vue.filter('toWeatherIcon', function (icon_code) {
    if (!icon_code) return '';
    return `https://openweathermap.org/img/wn/${icon_code}@2x.png`;
})

Vue.filter('toDate', function (timestamp) {
    if (!timestamp) return ''
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    return formattedDate;
})
