import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/contact/Contact";
import Event from "../components/Events/Event";
import Carousel from "../components/Home/Carousel";
import CustomizePlan from "../components/Home/CustomizePlan";
import TopVlaueSection from "../components/Home/TopVlaueSection";

import Package from "../components/Packages/Package";
import { useEffect } from "react";
import Review from "../components/review/Review";
import CarouselPartner from "../components/partners/CarouselPartner";
import Footer from "../components/Footer/Footer";

export default function Home() {
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        const scrollToBottom = () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        };

        const scrollDownBtn = document.getElementById("scroll-down-btn");
        const scrollUpBtn = document.getElementById("scroll-up-btn");

        if (scrollDownBtn) {
            scrollDownBtn.addEventListener("click", scrollToBottom);
        }

        if (scrollUpBtn) {
            scrollUpBtn.addEventListener("click", scrollToTop);
        }

        return () => {
            if (scrollDownBtn) {
                scrollDownBtn.removeEventListener("click", scrollToBottom);
            }

            if (scrollUpBtn) {
                scrollUpBtn.removeEventListener("click", scrollToTop);
            }
        };
    }, []);

    return (
        <section>
            <h1 className="sr-only">Home section</h1>
            <section id="carousel">
                <Carousel />
            </section>
            <section className="hidden lg:block">
                <TopVlaueSection />
            </section>
            <section className="px-4 sm:px-10 md:px-20 lg:px-40">
                <CustomizePlan />
            </section>
            <section className="pb-12">
                <div className="w-full h-28 bg-[#53FFE126] flex items-center justify-center">
                    <div className="text-black text-xl sm:text-4xl font-bold uppercase">
                        Popular Package Tours
                    </div>
                </div>
            </section>
            <section className="px-4 sm:px-10 md:px-20 lg:px-40 pb-24 border-[#006D5A57] border-b-2">
                <Package />
            </section>
            <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-24 pb-12">
                <Event />
            </section>
            <section className="px-4 sm:px-10 md:px-20 lg:px-32 py-10 border-t border-emerald-700 pb-0 hidden xl:block">
                <div className="mt-12">
                    <About />
                </div>
            </section>
            <section className="px-4 sm:px-10 md:px-20 lg:px-40 pt-12 pb-12 bg-teal-100 h-full">
                <div className="mt-12">
                    <Blog />
                </div>
            </section>
            <section className="px-4 sm:px-10 md:px-20 lg:px-40 pt-12 pb-12 h-full">
                <Contact />
            </section>
            <section className="px-4 sm:px-10 md:px-20 lg:px-40 pt-12 pb-2 h-full">
                <Review />
            </section>
            <section className="pt-5 pb-10 h-full">
                <CarouselPartner />
            </section>
            <section className="pt-5 h-full">
                <Footer />
            </section>
            <div>
                <img
                    src="/images/upload.png"
                    alt="upload"
                    id="scroll-up-btn"
                    className="fixed cursor-pointer bottom-52 w-12 right-4 bg-gray-200 text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition duration-300 ease-in-out"
                />
                <img
                    src="/images/down-arrow.png"
                    alt="down-arrow"
                    id="scroll-down-btn"
                    className="fixed cursor-pointer bottom-36 w-12 right-4 bg-gray-200 text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition duration-300 ease-in-out"
                />
            </div>
        </section>
    );
}
