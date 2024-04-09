import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useLocationSuggestionsStore = create(
	devtools((set) => ({
		locations: [],
	})),
);
