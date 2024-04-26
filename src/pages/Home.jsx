import Carousel from "../components/Home/Carousel";
import CustomizePlan from "../components/Home/CustomizePlan";
import TopVlaueSection from "../components/Home/TopVlaueSection";

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
        </section>
    );
}
