import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import {createPinia} from "pinia";

const app = createApp(App);
app.config.globalProperties.$weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;
app.config.globalProperties.$weatherAPIURL = 'https://api.weatherapi.com/v1/forecast.json';

app.use(router).use(createPinia()).mount('#app');
