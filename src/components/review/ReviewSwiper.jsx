import ReviewCarouselCard from "./ReviewCarouselCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { useRef, useState } from "react";

const ReviewSwiper = () => {
    const swiperRef = useRef(null);
    const [selected, setSelected] = useState("");

    const handleSelect = (id) => {
        setSelected(id);
    };

    return (
        <div className="carousel-container mb-20">
            <div className="swiper-pagination"></div>
            <Swiper
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <ReviewCarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCarouselCard selected={selected} handleSelect={handleSelect} />
                </SwiperSlide>
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
};

export default ReviewSwiper;
