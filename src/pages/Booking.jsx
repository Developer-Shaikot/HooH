import BookingFields from "../components/booking/BookingFields";
import PlaceInformation from "../components/booking/PlaceInformation";
import BookingAbout from "../components/booking/BookingAbout";
import BookingHeading from "./BookingHeading";
import Volunteers from "../components/booking/Volunteers";
import TripsNote from "../components/booking/TripsNote";
import WeatherReport from "../components/booking/WeatherReport";
import { useLocation, useParams } from "react-router-dom";

export default function Booking() {
	const location = useLocation();
	const params = useParams();

	console.log(location.state, params.packageId);

	return (
		<section className="px-6 sm:px-8 md:px-12 py-5">
			{/* ======================= heading section ========================= */}
			<BookingHeading />

			{/* ===================== about section ================================= */}
			<div className="mt-7">
				<BookingAbout />
			</div>

			{/* ===================== select places form ========================== */}
			<div className="mt-7">
				<div className="grid grid-cols-1 sm:grid-cols-5 gap-y-6 sm:gap-8">
					<BookingFields />
					{/* ---------------- place information -------------- */}
					<PlaceInformation />
				</div>
			</div>

			{/* ==================== volunteers information ===================== */}
			<div className="mt-10">
				<Volunteers />
			</div>

			{/* ======================== trips info section =========================== */}
			<div className="grid grid-cols-1 sm:grid-cols-5 my-10 gap-y-4 sm:gap-4">
				<TripsNote />
				<WeatherReport />
			</div>

			{/* ======================= checkout button ======================= */}
			<button className="font-semibold flex justify-between rounded-xl text-2xl py-4 px-6 sm:px-8 bg-primary hover:bg-teal-800 w-full text-white">
				<span>Total Cost - </span>
				<span>$203.34</span>
			</button>

			{/* ==================== continue checkout section ===================== */}
			<div className="mt-4 flex sm:flex-row flex-col gap-3 items-center sm:justify-between">
				<div className="font-semibold flex text-center">
					<p>Need help with Booking?</p>
					<span>
						<a href="/" className="underline ml-2 text-[#00AAE5]">
							SEND US Message
						</a>
					</span>
				</div>
				<button className="text-primary font-semibold">Continue {">"}</button>
			</div>
		</section>
	);
}
