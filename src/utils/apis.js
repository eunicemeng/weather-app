import { useLocationSuggestionsStore } from "../contexts/locationSuggestionsContext";

export async function getLocationCoordinates() {
	const requestOptions = {
		method: "GET",
	};

	try {
		const response = await fetch(
			"http://api.openweathermap.org/geo/1.0/direct?q=Osaka,JP&limit=50&appid=30c15dbd58130a40f87f4ef62869590a",
			requestOptions,
		);
		const responseBody = await response.json();
	} catch {}

	// fetch(
	// 	"http://api.openweathermap.org/geo/1.0/direct?q=Osaka,JP&limit=50&appid=30c15dbd58130a40f87f4ef62869590a",
	// 	requestOptions,
	// )
	// 	.then((response) => response.text())
	// 	.then((result) => console.log(result))
	// 	.catch((error) => console.error(error));
}

export async function fetchLocationSuggestions(cityInput) {
	const requestOptions = {
		method: "GET",
	};
	const response = await fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=5&appid=30c15dbd58130a40f87f4ef62869590a`,
		requestOptions,
	);
	const queryResult = await response.json();
	const locationSuggestions = queryResult.map((location) => {
		location.local_names = undefined;
		location.text = location.state
			? `${location.name}, ${location.state}, ${location.country}`
			: `${location.name}, ${location.country}`;
		return location;
	});
	console.log("locationSuggestions: ", locationSuggestions);
	useLocationSuggestionsStore.setState({
		locations: locationSuggestions,
	});
	// return locationSuggestions;
}
