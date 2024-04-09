export function formatEpochTimestamp(epochTimestamp) {
	const timestampInMilliseconds = epochTimestamp * 1000;
	const date = new Date(timestampInMilliseconds);
	const formattedDate = date.toLocaleString("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
	return formattedDate;
}

export function getCurrentDateTime() {
	const date = new Date();
	const epochTimeMilliseconds = date.getTime();
	const epochTimeSeconds = Math.floor(epochTimeMilliseconds / 1000);
	return formatEpochTimestamp(epochTimeSeconds);
}
