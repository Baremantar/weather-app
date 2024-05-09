<script setup lang="ts">
const props = defineProps<{
  data: object
}>()

const day = props.data;
</script>

<template>
  <div class="weather-tile__wrapper">
    <h2>{{ day?.date }}</h2>
    <p>avgtemp_c: {{day?.day.avgtemp_c}}</p>
    <p>maxtemp_c: {{day?.day.maxtemp_c}}</p>
    <p>mintemp_c: {{day?.day.mintemp_c}}</p>
  </div>
</template>

<style scoped>
.weather-tile__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px;
  height: 100%;
  background: var(--color-background);
  border-radius: 20px;


}
</style>