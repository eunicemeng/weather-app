import "./App.css";
import SearchBar from "./features/searchBar";
import WeatherIcon from "./features/weatherIcon";
import WeatherInfo from "./features/weatherInfo";

function App() {
	return (
		<div className="app">
			<div className="content-border">
				<SearchBar />
				<WeatherIcon />
				<WeatherInfo />
			</div>
		</div>
	);
}

export default App;
