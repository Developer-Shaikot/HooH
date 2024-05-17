import { useEffect, useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "/images/Rectangle 32.jpg",
        "/images/manya-krishnaswamy-RZUkK7Tb-Hw-unsplash.jpg",
        "/images/venti-views--9nM8E5_CmY-unsplash.jpg",
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((currentSlide + 1) % images.length);
    }, [currentSlide, images.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    }, [currentSlide, images.length]);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlide]);

    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-white">
            <div className="absolute inset-0">
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                <div className="tex-xl sm:text-4xl font-bold uppercase">
                    the extraordinary HOOH Travel
                </div>
                <div className="mt-4 text-xl">Explore and book your place to visit</div>
                {/* <div className="mt-6">
                    <IconButton
                        height="h-10"
                        width="w-[90px]"
                        bg="bg-green-600"
                        color="text-white"
                        text="Explore"
                    />
                </div> */}
                <div className="pt-10 flex items-center justify-center">
                    <FontAwesomeIcon
                        icon={faComputerMouse}
                        bounce
                        className="text-white text-6xl"
                    />
                </div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <button onClick={prevSlide} className="text-white text-4xl">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <button onClick={nextSlide} className="text-white text-4xl">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}
