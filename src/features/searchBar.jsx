import "./searchBar.css";

function SearchBar() {
	return (
		<form role="search" className="search-form">
			<label for="searchBar" className="search-label">
				Country
			</label>
			<input
				className="search-bar"
				type="search"
				id="searchBar"
				name="searchBar"
				placeholder="Search for a city"
				aria-label="Search for a city to view the current weather"
			/>
			<button type="submit" className="search-button">
				Search
			</button>
		</form>
	);
}

export default SearchBar;
