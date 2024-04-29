// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import Volunteer from "./Volunteer";
import { volunteerData } from "../../../constant";
import { useRef, useState } from "react";

export default function Volunteers() {
	const swiperRef = useRef();
	const [selected, setSelected] = useState("");

	const handleSelect = (id) => {
		setSelected(id);
	};

	return (
		<div className="mt-4">
			<div className="flex justify-between items-center">
				<div className="flex items-center font-bold text-[20px] text-black-50 gap-1.5 mb-4">
					<img src="/icons/select-location.svg" className="w-4" alt="" />
					Select Suitable Volunteer
				</div>
				<div className="flex gap-1.5">
					<button onClick={() => swiperRef.current.slidePrev()}>
						<img src="/icons/prev.svg" className="w-6" alt="" />
					</button>
					<button onClick={() => swiperRef.current.slideNext()}>
						<img src="/icons/prev.svg" className="w-6 rotate-180" alt="" />
					</button>
				</div>
			</div>
			<Swiper
				spaceBetween={20}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 4,
					},
					1024: {
						slidesPerView: 5,
					},
				}}
			>
				{volunteerData.map((data) => (
					<SwiperSlide key={data.id}>
						<Volunteer selected={selected} handleSelect={handleSelect} data={data} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
