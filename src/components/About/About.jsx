export default function About() {
    return (
        <section className="px-12 py-8">
            <div className="text-black text-5xl font-semibold mb-5">About HooH!!</div>
            <div className="flex items-center mb-12">
                <img src="/icons/DASHHHH.svg" alt="Dash Icon" className="mr-3" />
                <div className="text-black text-xl font-normal">OUR SERVICES FOR CLIENTS</div>
            </div>
            <hr className="w-[350px] sm:w-[350px] md:w-[350px] lg:w-[420px] xl:w-[410px] 2xl:w-[395px] h-px origin-top-left rotate-90 border-dashed border-2 border-emerald-700 ml-8" />

            <div className="ml-8">
                {" "}
                <div className="flex flex-col md:flex-row mt-[-15px] ml-[-43px]">
                    <div className="flex flex-col items-start space-y-16 md:w-1/2">
                        <div className="flex items-center space-x-4">
                            <img
                                src="/icons/abt-1.svg"
                                alt="Icon 1"
                                className="w-20 h-20 absolute overflow-hidden"
                            />
                            <div>
                                <div className="text-xl font-semibold ml-24">
                                    The Variety of Tours
                                </div>
                                <div className="text-gray-600 ml-24">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src="/icons/abt-2.svg"
                                alt="Icon 1"
                                className="w-20 h-20 absolute overflow-hidden"
                            />
                            <div>
                                <div className="text-xl font-semibold ml-24">
                                    Low Price & Friendly
                                </div>
                                <div className="text-gray-600 ml-24">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src="/icons/abt-3.svg"
                                alt="Icon 1"
                                className="w-20 h-20 absolute overflow-hidden"
                            />
                            <div>
                                <div className="text-xl font-semibold ml-24">
                                    Experience & Trustworthy
                                </div>
                                <div className="text-gray-600 ml-24">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src="/icons/abt-4.svg"
                                alt="Icon 1"
                                className="w-20 h-20 absolute overflow-hidden"
                            />
                            <div>
                                <div className="text-xl font-semibold ml-24">
                                    Trusted Travel Guide
                                </div>
                                <div className="text-gray-600 ml-24">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-end md:mt-0">
                        <img
                            src="/images/abt-hoohimgjpg.jpg"
                            alt="Scenic View"
                            className="w-96 h-vh"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
