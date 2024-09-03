<script setup lang="ts">
import WeatherTileList from "./WeatherTileList.vue";
import {globalStore} from "../../store";
import {computed, getCurrentInstance, onBeforeMount} from "vue";

const instance = getCurrentInstance();
const store = globalStore();

onBeforeMount(() => {
  if (instance && instance.proxy) {
    store.setData('Sevastopol', {
      apiKey: instance.proxy.$weatherAPIKey ?? 'error',
      weatherAPIURL: instance.proxy.$weatherAPIURL ?? 'error',
      defaultCity: 'Moscow',
      days: 3,
    });
  }
});

const forecastData = computed(() => {
  return store.getForecastData;
})

</script>

<template>
  <div class="container">
    <WeatherTileList v-if="forecastData" :forecast="forecastData"/>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: 33.3vh;
  width: 100%;

  @media (max-width: 768px) {
    height: 66.6vh;
  }
}
</style>