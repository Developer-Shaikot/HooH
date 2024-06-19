import { weatherCode } from "../../../constant";
import useWeatherApi from "../../hooks/useWeatherApi";
import { getDateTimeString } from "../../utils/getDateTimeString";
import { getHour } from "../../utils/getHour";

export default function WeatherReport({ location = "dhaka" }) {
	// TODO: later this city name will come dynamically from user form
	const { data, error, isLoading, refetch } = useWeatherApi(location);

	return (
		<div className="col-span-2 border-2 font-poppins rounded-xl border-[#006D5A6B] px-6 py-4">
			<div className="flex md:flex-row flex-col items-center justify-between gap-3 mb-4">
				<h1 className="flex items-center font-bold text-[20px] gap-1.5 text-black-50">
					Trip Weather
				</h1>
				<div className="flex gap-2 justify-center items-center">
					<div>
						<span className="inline-flex items-center gap-1 capitalize text-xs bg-primary px-3 py-1 rounded-xl text-white">
							<img
								src="/icons/select-location.svg"
								className="w-2.5 white-image"
								alt=""
							/>
							{location}
						</span>
					</div>
					<div title="Refresh now">
						<img
							draggable={false}
							onClick={refetch}
							src="/icons/refresh.png"
							className="w-5 cursor-pointer"
							alt="reload"
						/>
					</div>
				</div>
			</div>
			{/* --------------- weather report section ----------- */}
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<article className="font-poppins">
					<div className="flex gap-5 items-center justify-center">
						<img
							src={`/images/weather/${data.current?.weather_code}.png`}
							alt={weatherCode[data.current?.weather_code]}
							className="w-28"
						/>
						<div>
							<h1 className="font-semibold text-black-50 text-3xl">
								{Math.round(data.current?.temperature_2m)} ° C
							</h1>
							<p className="text-sm text-black-70">
								{weatherCode[data.current?.weather_code]}
							</p>
							<p className="text-sm text-black-70">
								{getDateTimeString(data.current?.time)}
							</p>
						</div>
					</div>
					{/* ----------- sunset and sunrise information --------------- */}
					<div className="flex justify-around my-6">
						<div className="flex items-center flex-col gap-2">
							<img className="w-14" src="/icons/sunrise-sunset.svg" alt="" />
							<span className="text-sm text-center text-black-25">
								Sunrise {getHour(data.daily?.sunrise[0])}
							</span>
						</div>
						<div className="flex items-center flex-col gap-2">
							<img className="w-14" src="/icons/sunrise-sunset.svg" alt="" />
							<span className="text-sm text-center text-black-25">
								Sunset {getHour(data.daily?.sunset[0])}
							</span>
						</div>
					</div>
					<hr />
					{/* ----------------- other properties ------------- */}
					<div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-2 gap-6 mt-6">
						<div className="flex flex-col justify-center items-center">
							<h2 className="text-center text-slate-500">Wind</h2>
							<p className="text-black-50">{data.current?.wind_speed_10m} km/h</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<h2 className="text-center text-slate-500">Humidity</h2>
							<p className="text-black-50">{data.current?.relative_humidity_2m}%</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<h2 className="text-center text-slate-500">Feels Like</h2>
							<p className="text-black-50">
								{Math.ceil(data.current?.apparent_temperature)}
								°C
							</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<h2 className="text-center text-slate-500">Rain</h2>
							<p className="text-black-50">{data.current?.rain} mm</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<h2 className="text-center text-slate-500">Cloud cover</h2>
							<p className="text-black-50">{data.current?.cloud_cover}%</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<h2 className="text-center text-slate-500">Pressure</h2>
							<p className="text-black-50">{data.current?.pressure_msl} hPa</p>
						</div>
					</div>
				</article>
			)}
			{error && <p>{error}</p>}
		</div>
	);
}
