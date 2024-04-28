import { Link } from "react-router-dom";
import { transportationData } from "./../../constant/index";
import TransportationCard from "../components/cards/TransportationCard";

export default function Booking() {
	return (
		<section className="px-6 sm:px-8 md:px-12 py-5">
			{/* ======================= heading section ========================= */}
			<div className="flex gap-2.5 sm:flex-row font-poppins flex-col items-center justify-between">
				<div className="sm:text-start text-center">
					<h1 className="font-semibold text-[40px] text-black-50">Welcome to Dhaka</h1>
					<p className="-mt-1.5 text-[#7E7A7A]">
						Lorem Ipsum is simply dummy text of the printing and
					</p>
				</div>
				<div className="flex">
					<Link to="/">
						<img src="/icons/link.svg" className="w-14 h-14" alt="" />
					</Link>
					<Link to="/">
						<img src="/icons/location.svg" className="w-14 h-14" alt="" />
					</Link>
					<Link to="/">
						<img src="/icons/like.svg" className="w-14 h-14" alt="" />
					</Link>
				</div>
			</div>

			{/* ===================== about section ================================= */}
			<div className="mt-7">
				<div className="grid grid-cols-1 sm:grid-cols-5 gap-y-6 sm:gap-8">
					<div className="col-span-2 border-2 font-poppins rounded-xl border-[#006D5A6B] px-6 py-5">
						<h1 className="font-semibold text-[26px] text-black-50">About</h1>
						<p className="text-[#594E4E] mt-2 mb-1">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy text
							ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five
							centuries, It has survived not only five centuries.
						</p>
						<span className="text-[#594E4E] font-semibold underline cursor-pointer">
							Read More
						</span>
						<div className="flex flex-col my-4 gap-1">
							<a
								target="_blank"
								href="https://youtu.be/E2Df6iwT-SA?si=1n-rhgq8rfPDmQtW"
								className="inline-flex gap-2"
							>
								<img src="/icons/video.svg" className="w-5" alt="" />
								<span className="text-blue-400 underline">Watch Video </span>
							</a>
							<div className="inline-flex gap-2">
								<img src="/icons/visitor.svg" className="w-5" alt="" />
								<span className="text-[#594E4E]">
									Most Visited city by the tourist
								</span>
							</div>
						</div>
						<button className="bg-primary text-sm rounded-full px-3.5 py-1.5 text-white">
							More options
						</button>
					</div>
					{/* ---------- full place image section --------- */}
					<div className="col-span-3 rounded-xl">
						<img
							src="/images/dhaka-city.png"
							className="h-full w-full object-cover rounded-xl"
							alt="dhaka"
						/>
					</div>
				</div>
			</div>

			{/* ========================== select places form =============================== */}
			<div className="mt-7">
				<div className="grid grid-cols-1 sm:grid-cols-5 gap-y-6 sm:gap-8">
					<div className="bg-[url(/images/wave.svg)] bg-bottom bg-no-repeat col-span-2 border-2 font-poppins rounded-xl border-[#006D5A6B] px-6 pt-5 pb-9">
						<div className="mt-3">
							<div className="flex items-center font-semibold gap-1.5 mb-3">
								<img src="/icons/select-location.svg" className="w-4" alt="" />
								Select a place
							</div>
							<div>
								<select
									name="location"
									className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
								>
									<option value="old-dhaka">Old dhaka</option>
									<option value="old-dhaka">Old dhaka</option>
									<option value="old-dhaka">Old dhaka</option>
								</select>
							</div>
						</div>
						<div className="mt-6">
							<div className="flex items-center font-semibold gap-1.5 mb-3">
								<img src="/icons/calendar.svg" className="w-4" alt="" />
								Date
							</div>
							<div>
								<input
									type="date"
									name="startDate"
									className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
								/>
							</div>
						</div>
						<div className="mt-6">
							<div className="flex items-center font-semibold gap-1.5 mb-3">
								<img src="/icons/duration.svg" className="w-4" alt="" />
								Duration (hour)
							</div>
							<div>
								<input
									type="number"
									placeholder="00"
									min={1}
									name="duration"
									className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
								/>
							</div>
						</div>
						<div className="mt-6">
							<div className="flex items-center font-semibold gap-1.5 mb-3">
								<img src="/icons/traveler.svg" className="w-4" alt="" />
								Add Traveler
							</div>
							<div>
								<input
									type="number"
									placeholder="00"
									min={1}
									name="travelers"
									className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
								/>
							</div>
						</div>
						<div className="mt-6">
							<div className="flex items-center font-semibold gap-1.5 mb-3">
								<img src="/icons/transport.svg" className="w-4" alt="" />
								Select transport
							</div>
							<div>
								<select
									name="location"
									className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
								>
									<option value="road">Road</option>
									<option value="car">Car</option>
									<option value="bike">Bike</option>
								</select>
							</div>
						</div>
					</div>
					{/* ---------------- place information -------------- */}
					<div className="col-span-3 rounded-xl">
						<h1 className="font-semibold text-[26px] text-black-50">
							The places you can Visit in Dhaka
						</h1>
						<div className="grid grid-cols-2 gap-2 mt-3">
							<div>
								<img src="/images/dhaka-3.png" alt="" />
							</div>
							<div>
								<img src="/images/dhaka-4.png" alt="" />
							</div>
						</div>
						<div className="grid grid-cols-3 gap-2 mt-2">
							<div>
								<img src="/images/dhaka-6.png" alt="" />
							</div>
							<div>
								<img src="/images/dhaka-2.png" alt="" />
							</div>
							<div>
								<img src="/images/dhaka-5.png" alt="" />
							</div>
						</div>
						<hr className="mt-4" />
						{/* -------------- transportation --------------- */}
						<div className="mt-2">
							<h1 className="font-semibold mb-3 text-[26px] text-black-50">
								Transportation
							</h1>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
								{transportationData.map((data) => (
									<TransportationCard key={data.id} data={data} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
