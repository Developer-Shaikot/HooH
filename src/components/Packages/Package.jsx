// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { useRef, useState } from "react";
import PackagesCard from "./PackagesCard";
import { useGetAllToursQuery } from "../../feature/tour/tourSlice";

export default function Package() {
    const swiperRef = useRef();
    const [selected, setSelected] = useState("");
    const { data: packagesData, isLoading } = useGetAllToursQuery();

    const handleSelect = (id) => {
        setSelected(id);
    };

    return (
        <div className="mx-auto mt-4">
            <Swiper
                spaceBetween={50}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {!isLoading &&
                    packagesData?.data?.map((data) => (
                        <SwiperSlide key={data._id}>
                            <PackagesCard
                                selected={selected}
                                handleSelect={handleSelect}
                                data={data}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className="flex justify-center items-center pt-8 gap-1.5 box-shadow">
                <button onClick={() => swiperRef.current.slidePrev()}>
                    <img src="/icons/prev.svg" className="w-8" alt="" />
                </button>
                <button onClick={() => swiperRef.current.slideNext()}>
                    <img src="/icons/prev.svg" className="w-8 rotate-180" alt="" />
                </button>
            </div>
        </div>
    );
}
