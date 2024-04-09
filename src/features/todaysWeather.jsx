import React from "react";
import "./todaysWeather.css";
import { useTodaysWeatherStore } from "../contexts/todaysWeatherStore";

function TodaysWeather() {
	const weather = useTodaysWeatherStore((state) => state.weather);

	return (
		<div className="todays-weather">
			<p>Today's weather</p>
			{Object.keys(weather).length === 0 ? (
				<div id="no-weather-to-display">
					Search for a city to view the weather!
				</div>
			) : (
				<React.Fragment>
					<p className="current-temperature">{weather.currentTemp}°</p>
					<p className="highest-lowest-temp">
						H: {weather.highestTemp}° L: {weather.lowestTemp}°
					</p>
					<div className="more-info">
						<div className="state-country">{weather.displayText}</div>
						<div className="date-time">{weather.timestamp}</div>
						<div className="humidity">Humidity: {weather.humidity}%</div>
						<div className="weather-conditions">{weather.description}</div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
}

export default TodaysWeather;
