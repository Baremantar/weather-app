<script setup lang="ts">
import WeatherTileList from "./WeatherTileList.vue";
import axios from "axios";
import {getCurrentInstance} from "vue";
import {globalStore} from "../../store";

const app = getCurrentInstance(),
    apiKey = app?.appContext.config.globalProperties.$weatherAPIKey,
    weatherAPIURL: string = app?.appContext.config.globalProperties.$weatherAPIURL,
    currentCity: string = 'London',
    days: number = 3;

const state = globalStore();

function getWeather(city:string):void {
  axios.get(weatherAPIURL + `?key=${apiKey}&q=${city}&days=${days}`)
      .then(response => {
        state.setData(response.data);
      })
      .catch(error => console.log(error));
}

getWeather(currentCity);
</script>

<template>
  <div class="container">
    <WeatherTileList :forecast="state.getForecastData?.forecastday"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 33.3vh;
  width: 100%;
}
</style>