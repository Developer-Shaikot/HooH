import { useEffect, useState } from "react";
import { locations } from "../../constant";

const baseUrl = "https://api.open-meteo.com/v1/forecast";

// generate proper url for weather api
const generateUrl = (city) => {
	const date = new Date();
	const formatter = new Intl.DateTimeFormat("fr-CA", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

	const today = formatter.format(date);

	// get the appropriate overall (center of that city) latitude and longitude based on the city
	const locationInfo = locations[city];

	return `${baseUrl}?latitude=${locationInfo.lat}&longitude=${locationInfo.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=GMT&daily=sunrise,sunset&start_date=${today}&end_date=${today}`;
};

export default function useWeatherApi(city) {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const res = await fetch(generateUrl(city));
			const data = await res.json();
			setData(data);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	// if need to fetch the latest data, call the fetchData function again
	const refetch = () => fetchData();

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, error, isLoading, refetch };
}
