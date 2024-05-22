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
            <section>
                <CustomizePlan />
            </section>
            <section className="pb-12">
                <div className="w-full h-28 bg-[#53FFE126]  flex items-center justify-center">
                    <div className="text-black text-xl sm:text-4xl font-bold uppercase ">
                        Popular Package Tours
                    </div>
                </div>
            </section>
            <section className="px-10 pb-24 border-[#006D5A57] border-b-2">
                <Package />
            </section>
            <section className="px-10 py-24 pb-12 ">
                <Event />
            </section>
            <section className="px-10 py-24 pb-12 ">
                <About />
            </section>
        </section>
    );
}
