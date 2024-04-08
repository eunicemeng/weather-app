import "./todaysWeather.css";

function TodaysWeather() {
	return (
		<div className="todays-weather">
			<p>Today's weather</p>
			<p className="current-temperature">26°C</p>
			<p className="highest-lowest-temp">H: 29° L: 26°</p>
			<div className="more-info">
				<div className="state-country">Johor, MY</div>
				<div className="date-time">08-04-2024 09:41am</div>
				<div className="humidity">Humidity: 58%</div>
				<div className="weather-conditions">Clouds</div>
			</div>
		</div>
	);
}

export default TodaysWeather;
