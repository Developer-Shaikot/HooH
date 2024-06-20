import { useNavigate } from "react-router-dom";
import IconButton from "../buttons/IconButton";
import { categories, cities } from "../../../constant";
import { useState } from "react";
import { useSearchToursQuery } from "../../feature/tour/tourSlice";

const initialData = {
	city: "",
	place: "",
	category: "",
	tour: "",
};

export default function CustomizePlan() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialData);

	const { data: tourData, isLoading } = useSearchToursQuery({
		city: formData.city,
		category: formData.category,
		place: formData.place,
	});

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/booking/${formData.tour}`);
	};

	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-2 py-8">
				<form className="px-5 sm:px-20 mt-6" onSubmit={handleSubmit}>
					<div className="text-gray-900 text-[20px] sm:text-4xl font-semibold mb-8">
						Customize Your Tour Plan
					</div>
					<div className="mt-3">
						<div className="flex items-center font-semibold gap-1.5 mb-3">
							<img src="/icons/select-location.svg" className="w-4" alt="" />
							Select a City
						</div>
						<div>
							<select
								required
								onChange={handleChange}
								name="city"
								className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
							>
								<option value="">Choose City</option>
								{Object.keys(cities).map((city, index) => (
									<option key={index} value={city}>
										{city}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="mt-5">
						<div className="flex items-center font-semibold gap-1.5 mb-3">
							<img src="/icons/select-location.svg" className="w-4" alt="" />
							Select a place
						</div>
						<div>
							<select
								required
								onChange={handleChange}
								name="place"
								className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
							>
								<option value="">Choose place</option>
								{!cities[formData.city] ? (
									<option value="">Select a city first</option>
								) : (
									cities[formData.city]?.areas.map((area) => (
										<option key={area} value={area}>
											{area}
										</option>
									))
								)}
							</select>
						</div>
					</div>
					<div className="mt-5">
						<div className="flex items-center font-semibold gap-1.5 mb-3">
							<img src="/icons/select-location.svg" className="w-4" alt="" />
							Select a category
						</div>
						<div>
							<select
								required
								onChange={handleChange}
								name="category"
								className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
							>
								<option value="">Choose a category</option>
								{categories.map((data, index) => (
									<option key={index} value={data.name}>
										{data.name}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="mt-5">
						<div className="flex items-center font-semibold gap-1.5 mb-3">
							<img src="/icons/select-location.svg" className="w-4" alt="" />
							Select a Tour
						</div>
						<div>
							<select
								required
								onChange={handleChange}
								name="tour"
								className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
							>
								<option value="">Choose a tour</option>
								{isLoading ? (
									<option value="">Loading...</option>
								) : !tourData.data?.length ? (
									<option value="">No tour founds, try different filter.</option>
								) : (
									tourData?.data?.map((tour) => (
										<option key={tour._id} value={tour._id}>
											{tour.name} - {tour.price} BDT
										</option>
									))
								)}
							</select>
						</div>
					</div>
					<div className="mt-8">
						<IconButton
							height="h-10"
							width="w-[120px]"
							bg="bg-[#006D5A]"
							color="text-white"
							text="Book Now"
							type="submit"
						/>
					</div>
				</form>
				<div className="flex flex-col items-center">
					<div className="py-5">
						<img src="/images/Custom.png" alt="" className="w-full h-full" />
					</div>
				</div>
			</div>
		</section>
	);
}
