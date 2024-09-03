<script setup lang="ts">
import {forecastdayItem} from "../../helpers/types.ts";

const props = defineProps<{
  data: forecastdayItem
}>()

const day = props.data;
</script>

<template>
  <div class="weather-tile__wrapper">
    <h2>{{ day.date }}</h2>
    <p>Average temperature: {{day.day.avgtemp_c}}°C</p>
    <p>Max temperature: {{day.day.maxtemp_c}}°C</p>
    <p>Min temperature: {{day.day.mintemp_c}}°C</p>
  </div>
</template>

<style scoped lang="scss">
.weather-tile__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px;
  height: 100%;
  background: var(--color-background);
  border-radius: 20px;

  h2 {
    text-align: center;
  }
}

</style>