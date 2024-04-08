import "./searchHistory.css";

function SearchHistory() {
	return (
		<div className="search-history">
			<div className="content-border">
				<div>Search history</div>
				<div className="previous-search-items">
					<div className="state-country">Johor, MY</div>
					<div className="date-time">01-09-2022 09:41am</div>
					<div className="requery-item" />
					<div classname="delete-item" />
				</div>
			</div>
		</div>
	);
}

export default SearchHistory;
