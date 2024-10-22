<script setup lang="ts">
import WeatherTile from "./WeatherTile.vue";
import {forecastdayItem} from "../../helpers/types.ts";

const data = defineProps<{
  forecast: forecastdayItem[];
}>()

</script>

<template>
  <div class="weather-tile-list__wrapper">
    <WeatherTile v-for="(dataItem,index) in data.forecast" :key="index" :data="dataItem"/>
  </div>
</template>

<style scoped lang="scss">
.weather-tile-list__wrapper {
  display: flex;
  width: 100%;
  background: #18181890;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 10px 10px 0;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
</style>