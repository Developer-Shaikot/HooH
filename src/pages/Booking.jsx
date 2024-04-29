import BookingFields from "../components/booking/BookingFields";
import PlaceInformation from "../components/booking/PlaceInformation";
import BookingAbout from "../components/booking/BookingAbout";
import BookingHeading from "./BookingHeading";
import Volunteers from "../components/booking/Volunteers";

export default function Booking() {
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
		</section>
	);
}
