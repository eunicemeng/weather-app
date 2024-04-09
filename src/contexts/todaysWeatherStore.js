import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCurrentDateTime, formatEpochTimestamp } from "../utils/functions";

export const useTodaysWeatherStore = create(
	devtools((set) => ({
		weather: {},
	})),
);

export const addTodaysWeather = (weather) => {
	console.log("weather: ", weather);
	const weatherInfo = {
		currentTemp: Math.round(weather?.main?.temp),
		highestTemp: Math.round(weather?.main?.temp_max),
		lowestTemp: Math.round(weather?.main?.temp_min),
		displayText: `${weather?.name}, ${weather?.sys?.country}`,
		timestamp: getCurrentDateTime(),
		humidity: weather?.main?.humidity,
		description: weather?.weather[0]?.main,
		sunrise: formatEpochTimestamp(weather?.sys?.sunrise),
		sunset: formatEpochTimestamp(weather?.sys?.sunset),
	};
	console.log("weatherInfo: ", weatherInfo);
	useTodaysWeatherStore.setState({
		weather: weatherInfo,
	});
};
