export function getHour(timestamp) {
	if (!timestamp) return "Something wrong";

	const date = new Date(timestamp);

	const offsetGMTPlus6 = 6 * 60 * 60 * 1000;

	// Adjust the Date object to GMT+6
	const dateInGMTPlus6 = new Date(date.getTime() + offsetGMTPlus6);

	const options = {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	};

	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateInGMTPlus6);

	return formattedDate;
}
