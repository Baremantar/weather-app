<script setup lang="ts">
import WeatherApp from "../components/WeatherApp/index.vue";

const backgroundImageURL: string = '/mountain.gif';

</script>

<template>
  <main :style="`background-image: url(${backgroundImageURL})`">
    <h1>Just Relax</h1>
    <WeatherApp/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    font-size: 60px;
    color: white;
  }
}
</style>