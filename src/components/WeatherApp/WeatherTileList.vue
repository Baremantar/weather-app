<script setup lang="ts">
import WeatherTile from "./WeatherTile.vue";

const data = defineProps<{
  forecast?: object;
}>()

</script>

<template>
  <div class="weather-tile-list__wrapper">
    <WeatherTile v-for="(day,index) in data?.forecast" :key="index" :data="day"/>
  </div>
</template>

<style scoped>
  .weather-tile-list__wrapper {
    display: flex;
    width: 100%;
    background: #18181890;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 10px 10px 0;
    gap: 10px;
  }
</style>