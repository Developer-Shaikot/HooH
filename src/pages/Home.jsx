import Carousel from "../components/Home/Carousel";

export default function Home() {
    return (
        <section>
            <h1 className="sr-only">Overview section</h1>
            <section id="carousel" className="mb-[23px]">
                <Carousel />
            </section>
        </section>
    );
}
