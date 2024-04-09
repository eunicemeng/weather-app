import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCurrentDateTime } from "../utils/functions";

export const useSearchHistoryStore = create(
	devtools((set) => ({
		searchHistory: [],
	})),
);

export const addSearchHistory = (newSearch) => {
	const newSearchInfo = {
		id: Date.now(),
		city: newSearch.name,
		country: newSearch.sys.country,
		displayText: `${newSearch.name}, ${newSearch.sys.country}`,
		timestamp: getCurrentDateTime(),
		lon: newSearch.coord.lon,
		lat: newSearch.coord.lat,
	};
	const searchHistory = useSearchHistoryStore.getState().searchHistory;
	useSearchHistoryStore.setState({
		searchHistory: [...searchHistory, newSearchInfo],
	});
};

export const deleteSearchHistory = (itemId) => {
	const searchHistory = useSearchHistoryStore.getState().searchHistory;
	const updatedHistory = searchHistory.filter(
		(queryItem) => queryItem.id !== itemId,
	);
	useSearchHistoryStore.setState({
		searchHistory: updatedHistory,
	});
};
