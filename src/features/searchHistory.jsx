import "./searchHistory.css";
import {
	addSearchHistory,
	deleteSearchHistory,
	useSearchHistoryStore,
} from "../contexts/searchHistoryStore";
import { getLocationWeather } from "../utils/apis";
import { addTodaysWeather } from "../contexts/todaysWeatherStore";

function SearchHistory() {
	const history = useSearchHistoryStore((state) => state.searchHistory);

	async function handleRequeryLocationWeather(lat, lon) {
		const weather = await getLocationWeather(lat, lon);
		addTodaysWeather(weather);
		addSearchHistory(weather);
	}

	function handleDeleteHistoryItem(id) {
		deleteSearchHistory(id);
	}

	return (
		<div className="search-history">
			<div className="content-border">
				<div className="title">Search history</div>
				{[...history]?.reverse().map((item) => (
					<div key={item.id} className="previous-search-items">
						<div className="state-country">{item.displayText}</div>
						<div id="search-history-right-side">
							<div id="date-time" className="date-time">
								{item.timestamp}
							</div>
							<button
								type="button"
								id="requery"
								className="search-history-button"
								onClick={() => handleRequeryLocationWeather(item.lat, item.lon)}
							/>
							<button
								type="button"
								id="delete"
								className="search-history-button"
								onClick={() => handleDeleteHistoryItem(item.id)}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SearchHistory;
