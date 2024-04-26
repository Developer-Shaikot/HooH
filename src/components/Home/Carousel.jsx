import { useEffect, useCallback, useState } from "react";

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

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlide, nextSlide]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full min-h-screen	">
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
}
