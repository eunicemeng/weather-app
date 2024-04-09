import "./searchBar.css";
import { useState } from "react";
import { getLocationCoordinates, getLocationWeather } from "../utils/apis";
import { addSearchHistory } from "../contexts/searchHistoryStore";
import { addTodaysWeather } from "../contexts/todaysWeatherStore";

function SearchBar() {
	const [cityInput, setCityInput] = useState("");
	const [countryInput, setCountryInput] = useState("");
	const [error, setError] = useState("");

	async function handleUserSubmit(event) {
		setError("");
		event.preventDefault();
		if (!cityInput || !countryInput) {
			setError("Please input city and country fields!");
			console.error("Please input both city and country fields!");
			return;
		}
		const locationArray = await getLocationCoordinates(cityInput, countryInput);
		const { lat, lon } = locationArray[0]; // Assumption: User inputs information correctly and API returns information of correct country first.
		const weather = await getLocationWeather(lat, lon);
		addTodaysWeather(weather);
		addSearchHistory(weather);
		setCityInput("");
		setCountryInput("");
	}

	return (
		<form role="search" className="search-form">
			<div className="search-components">
				<div className="city">
					<label htmlFor="cityInput" className="search-label">
						City
					</label>
					<input
						type="search"
						value={cityInput}
						className="input"
						id="cityInput"
						name="cityInput"
						placeholder="Search for a city"
						aria-label="Search for a city to view the current weather"
						onChange={(e) => setCityInput(e.target.value)}
					/>
				</div>
				<div className="country">
					<label htmlFor="countryInput" className="search-label">
						Country
					</label>
					<input
						type="search"
						value={countryInput}
						className="input"
						id="countryInput"
						name="countryInput"
						placeholder="Search for a country"
						aria-label="Search for a country to view the current weather"
						onChange={(e) => setCountryInput(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="search-button"
					onClick={(e) => handleUserSubmit(e)}
				/>
			</div>
			<div id="input-error">{error}</div>
		</form>
	);
}

export default SearchBar;
