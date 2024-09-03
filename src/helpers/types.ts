export type weatherData = {
    current: {
        condition: condition,
        cloud: number,
        feelslike_c: number,
        temp_c: number,
    },
    forecast: { forecastday: Array<forecastdayItem> },
    location: {
        country: string,
        lat: number,
        localtime: string,
        lon: number,
        name: string,
        region: string,
        tz_id: string
    },
};

export type forecastdayItem = {
    date: string,
    day: {
        avgtemp_c: number,
        condition: condition,
        daily_chance_of_rain: number,
        daily_chance_of_snow: number,
        daily_will_it_rain: number,
        daily_will_it_snow: number,
        maxtemp_c: number,
        mintemp_c: number,
        maxwind_kph: number
    },
    hour: Array<hourItem>
}

type hourItem = {
    condition: condition,
    chance_of_rain: number,
    chance_of_snow: number,
    cloud: number,
    snow_cm: number,
    feelslike_c: number,
    temp_c: number,
    time: string,
}

export type requestData = {
    apiKey: string;
    weatherAPIURL: string;
    defaultCity: string;
    days: number;
};

type condition = {
    icon: string,
    text: string
}

