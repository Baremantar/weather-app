import {defineStore} from "pinia";
import {requestData, weatherData, forecastdayItem} from "../helpers/types.ts";
import axios, {AxiosResponse} from "axios";

export const globalStore = defineStore('globalStore', {
    state: () => ({
        weatherData: {} as weatherData,
    }),
    actions: {
        async setData(city: string, data: requestData): Promise<void> {
            try {
                const res:AxiosResponse<weatherData> = await axios.get(data.weatherAPIURL, {
                    params: {
                        key: data.apiKey,
                        q: city ? city : data.defaultCity,
                        days: data.days,
                    },
                })
                this.weatherData = res.data;
            } catch (error){
                console.log(error)
            }
        }
    },
    getters: {
        getForecastData(state):Array<forecastdayItem> {
            return state.weatherData?.forecast?.forecastday;
        }
    }
})