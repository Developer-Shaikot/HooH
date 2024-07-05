import About from "../components/About/About";
import Event from "../components/Events/Event";
import Carousel from "../components/Home/Carousel";
import CustomizePlan from "../components/Home/CustomizePlan";
import TopVlaueSection from "../components/Home/TopVlaueSection";
import Package from "../components/Packages/Package";

export default function Home() {
    return (
        <section>
            <h1 className="sr-only">Home section</h1>
            <section id="carousel">
                <Carousel />
            </section>
            <section className="hidden md:block">
                <TopVlaueSection />
            </section>
            <section className="px-10 md:px-40">
                <CustomizePlan />
            </section>
            <section className="pb-12">
                <div className="w-full h-28 bg-[#53FFE126]  flex items-center justify-center">
                    <div className="text-black text-xl sm:text-4xl font-bold uppercase ">
                        Popular Package Tours
                    </div>
                </div>
            </section>
            <section className="px-10 md:px-40 pb-24 border-[#006D5A57] border-b-2">
                <Package />
            </section>
            <section className="px-0 md:px-40 py-24 pb-12 ">
                <Event />
            </section>
            <section className="px-32 py-10 bg-teal-100 h-5  border-t border-emerald-700 pb-0 hidden lg:block">
                <div className="mt-12">
                    <About />
                </div>
            </section>
        </section>
    );
}
