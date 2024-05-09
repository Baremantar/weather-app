import {defineStore} from "pinia";

export const globalStore = defineStore('globalStore', {
    state: () => ({
        store: {}
    }),
    actions: {
        setData(data: object) {
            this.store = {...data};
        }
    },
    getters: {
        getForecastData(state):object {
            return state.store?.forecast;
        }
    }
})