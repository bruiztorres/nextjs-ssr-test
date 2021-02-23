import { MetaWeather } from "./weather.types";

class WeatherService {
    public async get(woeid: number): Promise<MetaWeather> {
        const res = await fetch(`https://www.metaweather.com/api/location/${woeid}`);
        return await res.json();
    }
}

const weatherService = new WeatherService();

export { weatherService as WeatherService };