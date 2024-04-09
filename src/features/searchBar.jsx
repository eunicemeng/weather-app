import "./searchBar.css";
import { useEffect, useState, useCallback } from "react";
import {
	fetchLocationSuggestions,
	getLocationCoordinates,
} from "../utils/apis";
import { debounce } from "lodash";
import { useLocationSuggestionsStore } from "../contexts/locationSuggestionsContext";

function getLocationFromUserInput(event) {
	event.preventDefault();
	const city = document.getElementById("cityInput").value;
	const country = document.getElementById("countryInput").value;
	console.log("city: ", city);
	console.log("country: ", country);

	getLocationCoordinates(city, country);
}

function SearchBar() {
	const [cityInput, setCityInput] = useState("");

	const locationSuggestions = useLocationSuggestionsStore(
		(state) => state.locations,
	);

	// useEffect(() => {
	// 	const input = document.getElementById("cityInput");
	// 	let userTypingTimeout = null;
	// 	input.addEventListener("keyup", () => {
	// 		clearTimeout(userTypingTimeout);
	// 		userTypingTimeout = setTimeout(() => {
	// 			console.log("User stopped typing");
	// 			suggestLocations();
	// 		}, 1000);
	// 	});
	// }, []);

	// function suggestLocations() {
	// 	console.log("suggest locations");
	// 	console.log(cityInput);
	// 	if (cityInput && cityInput.length > 2) {
	// 		fetchLocationSuggestions(cityInput, setSuggestions);
	// 	} else {
	// 		setSuggestions([]);
	// 	}
	// }

	// const debouncedSave = useCallback(
	// 	debounce((newValue) => fetchLocationSuggestions(newValue), 1000),
	// 	[],
	// );

	// useEffect(() => {
	// 	console.log(debouncedSave);
	// }, [debouncedSave]);

	// function handleCityInputChange(newValue) {
	// 	setCityInput(newValue);
	// 	debouncedSave(newValue);
	// }

	useEffect(() => {
		console.log(cityInput);
		const debounceFn = setTimeout(() => {
			if (cityInput && cityInput.length > 2) {
				fetchLocationSuggestions(cityInput);
			} else {
				// useLocationSuggestionsStore.setState({
				// 	locations: [],
				// });
				const suggestionsDiv = document.getElementById("suggestions");
				suggestionsDiv.style.display = "hidden";
			}
		}, 1000);

		return () => clearTimeout(debounceFn);
	}, [cityInput]);

	// useEffect(() => {
	// 	const suggestionsDiv = document.getElementById("suggestions");
	// 	if (!suggestions) {
	// 		suggestionsDiv.style.display = "hidden";
	// 	} else {
	// 		suggestionsDiv.innerHTML = "";
	// 		// biome-ignore lint/complexity/noForEach: <explanation>
	// 		suggestions.forEach((suggestion) => {
	// 			const div = document.createElement("div");
	// 			div.textContent = suggestion.text;
	// 			div.className = "suggestion";
	// 			suggestionsDiv.appendChild(div);
	// 			// div.addEventListener("click", handleSetSuggestion(suggestion.text));
	// 		});
	// 	}
	// 	suggestionsDiv.style.display = "block";
	// }, [suggestions]);

	function handleCloseSuggestions(locationText) {
		setCityInput(locationText);
		document.getElementById("suggestions").style.display = "hidden";
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
					<div id="suggestions">
						{locationSuggestions?.map((location) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<div
								className="suggestion"
								onClick={handleCloseSuggestions(location.text)}
							>
								{location.text}
							</div>
						))}
					</div>
				</div>
				<div className="country">
					<label htmlFor="countryInput" className="search-label">
						Country
					</label>
					<input
						className="input"
						type="search"
						id="countryInput"
						name="countryInput"
						placeholder="Search for a country"
						aria-label="Search for a country to view the current weather"
					/>
				</div>
				<button
					type="submit"
					className="search-button"
					onClick={getLocationFromUserInput}
				>
					Search
				</button>
			</div>
		</form>
	);
}

export default SearchBar;
