function SearchBar() {
	return (
		<div className="search">
			<form role="search">
				<label for="searchBar">Country</label>
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
		</div>
	);
}
