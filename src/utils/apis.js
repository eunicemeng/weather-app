const app_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export async function getLocationCoordinates(city, country) {
	const requestOptions = {
		method: "GET",
	};

	try {
		const response = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${app_key}`,
			requestOptions,
		);
		const responseBody = await response.json();
		console.log(responseBody);
		return responseBody;
	} catch (e) {
		console.error("Failed to retreive location coordinates. Error: ", e);
	}
}

export async function getLocationWeather(lat, lon) {
	const requestOptions = {
		method: "GET",
	};

	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${app_key}`,
			requestOptions,
		);
		const responseBody = await response.json();
		console.log(responseBody);
		return responseBody;
	} catch (e) {
		console.error("Failed to retrieve location weather. Error: ", e);
	}
}
