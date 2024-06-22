import BookingFields from "../components/booking/BookingFields";
import PlaceInformation from "../components/booking/PlaceInformation";
import BookingAbout from "../components/booking/BookingAbout";
import BookingHeading from "./BookingHeading";
import Volunteers from "../components/booking/Volunteers";
import TripsNote from "../components/booking/TripsNote";
import WeatherReport from "../components/booking/WeatherReport";
import { useNavigate, useParams } from "react-router-dom";
import { useSingleTourQuery } from "../feature/tour/tourSlice";
import Loading from "../pages/Loading";
import { useEffect, useState } from "react";
import { useAuth } from "./../hooks/useAuth";
import { toast } from "sonner";
import { useAddBookingMutation } from "../feature/booking/bookingSlice";

const initialData = {
	budget: 0,
	date: "",
	travelers: 1,
	transport: "",
	transactionId: "",
	bookingBy: "",
	package: "",
	guide: "",
	mobile: "",
	condition: false,
};

export default function Booking() {
	const navigate = useNavigate();
	const { user } = useAuth();
	const params = useParams();
	const [addBooking, { isLoading: isAdding }] = useAddBookingMutation();

	const { data: tourData, isLoading } = useSingleTourQuery(params.packageId);
	const [formData, setFormData] = useState(initialData);

	useEffect(() => {
		setFormData((prev) => {
			const transportFees =
				prev.transport === "car" ? 300 : prev.transport === "bike" ? 200 : 0;
			return {
				...prev,
				budget: tourData?.data?.price * prev.travelers + transportFees,
			};
		});
	}, [formData.travelers, formData.transport, tourData]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.condition) return toast.error("First accept the terms and conditions");
		if (!formData.guide) return toast.error("Choose a appropriate guide for you");

		addBooking({ ...formData, package: tourData?.data?._id, bookingBy: user?._id })
			.unwrap()
			.then((data) => {
				if (data.success) {
					toast.success(
						"Booking successful, wait for to admin approval. You will be notified by email."
					);
					navigate("/");
				} else {
					toast.error(`Error: ${data.message}`);
					console.error(data);
				}
			})
			.catch((err) => {
				toast.error(`Error: ${err.data?.message}`);
				console.error(err);
			});
	};

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	if (isLoading) return <Loading />;

	return (
		<form className="px-6 sm:px-8 md:px-12 py-5" onSubmit={handleSubmit}>
			{/* ======================= heading section ========================= */}
			<BookingHeading place={tourData?.data?.place} />

			{/* ===================== about section ================================= */}
			<div className="mt-7">
				<BookingAbout
					packageAvatar={tourData?.data?.packageAvatar}
					description={tourData?.data?.description}
					price={tourData?.data?.price}
				/>
			</div>

			{/* ===================== select places form ========================== */}
			<div className="mt-7">
				<div className="grid grid-cols-1 sm:grid-cols-5 gap-y-6 sm:gap-8">
					<BookingFields
						formData={formData}
						handleChange={handleChange}
						tourData={tourData?.data}
					/>
					{/* ---------------- place information -------------- */}
					<PlaceInformation />
				</div>
			</div>

			{/* ==================== volunteers information ===================== */}
			<div className="mt-10">
				<Volunteers setFormData={setFormData} />
			</div>

			{/* ======================== trips info section =========================== */}
			<div className="grid grid-cols-1 sm:grid-cols-5 my-10 gap-y-4 sm:gap-4">
				<TripsNote handleChange={handleChange} formData={formData} />
				<WeatherReport />
			</div>

			{/* ======================= checkout button ======================= */}
			<div className="grid grid-cols-2 gap-4">
				<div className="font-semibold flex justify-between rounded-xl text-2xl py-4 px-6 sm:px-20 bg-primary w-full text-white">
					<span>Total Cost - </span>
					<span>{formData.budget} BDT</span>
				</div>
				<div>
					<input
						className="w-full h-full bg-white border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
						type="text"
						value={formData.transactionId}
						onChange={handleChange}
						name="transactionId"
						required
						placeholder="Enter your Nagad/Bkash/Rocket transaction id"
					/>
				</div>
			</div>

			{/* ==================== continue checkout section ===================== */}
			<div className="mt-5 flex sm:flex-row flex-col gap-3 items-center sm:justify-between">
				<div className="font-semibold flex text-center">
					<p>Need help with Booking?</p>
					<span>
						<a href="tel:+8801833440993" className="underline ml-2 text-[#00AAE5]">
							SEND US Message
						</a>
					</span>
				</div>
				<button
					disabled={isAdding}
					type="submit"
					className="text-white font-semibold bg-primary hover:bg-teal-600 px-4 py-2.5 w-[230px] rounded-md"
				>
					Checkout Now {">"}
				</button>
			</div>
		</form>
	);
}
