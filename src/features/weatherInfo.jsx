import "./weatherInfo.css";
import TodaysWeather from "./todaysWeather";
import SearchHistory from "./searchHistory";

function WeatherInfo() {
	return (
		<div className="weather-info">
			<div className="content-border">
				<TodaysWeather />
				<SearchHistory />
			</div>
		</div>
	);
}

export default WeatherInfo;
