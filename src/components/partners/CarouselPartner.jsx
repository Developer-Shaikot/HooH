// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import your images
import docker from "/images/docker.png"; // Update the path as needed
import blender from "/images/blender.png"; // Update the path as needed
import fedex from "/images/fedex.png"; // Update the path as needed
import entergy from "/images/Entergy.png"; // Update the path as needed
import amazon from "/images/amazon.png"; // Update the path as needed
import ford from "/images/Ford.png"; // Update the path as needed
import nike from "/images/Nike.png"; // Update the path as needed
import travel from "/images/Travel.png"; // Update the path as needed
import distro from "/images/Distro.png"; // Update the path as needed

const CarouselPartner = () => {
    const images = [docker, blender, fedex, entergy, amazon, ford, nike, travel, distro];

    return (
        <div className="carousel px-12">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={5}
                centeredSlides={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1.7}
                breakpoints={{
                    500: {
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                    1500: {
                        slidesPerView: 7,
                    },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Logo ${index}`}
                            style={{ width: "100px", height: "50px" }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselPartner;
