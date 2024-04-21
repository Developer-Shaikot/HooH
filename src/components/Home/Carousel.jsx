import { useEffect, useState } from "react";

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        "/images/Rectangle 32.jpg",
        "/images/manya-krishnaswamy-RZUkK7Tb-Hw-unsplash.jpg",
        "/images/venti-views--9nM8E5_CmY-unsplash.jpg",
        // Add more image paths as needed
    ];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    // Set up an interval to automatically advance the carousel
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); // Change image every 3 seconds

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentSlide]); // Depend on currentSlide to reset the interval if needed

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full h-full">
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute top bottom-0 left-0 right-0 flex justify-between p-4">
                <button onClick={prevSlide} className="bg-white bg-opacity-50 p-2 rounded-full">
                    Prev
                </button>
                <button onClick={nextSlide} className="bg-white bg-opacity-50 p-2 rounded-full">
                    Next
                </button>
            </div>
        </div>
    );
}
