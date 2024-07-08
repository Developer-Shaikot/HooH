import { defaultImage } from "../../../constant";

function Blog() {
    return (
        <section className="pb-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                <p className="text-lg text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-8 place-items-center px-5">
                <div className="bg-white rounded-lg shadow-md max-w-xs">
                    <img
                        src="/images/Kuakata.jpg"
                        alt="Experience in Bandarban"
                        className="rounded-t-lg h-60"
                    />
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-blue-500 font-semibold">13 JAN</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">
                            We had a great experience on Bandarban
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Ipsum.
                        </p>
                        <div className="flex items-center">
                            <img
                                src={defaultImage}
                                alt="Author"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="text-gray-700 font-semibold">By Anabella</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md max-w-xs">
                    <img
                        src="/images/Sylhet.jpg"
                        alt="Experience in Bandarban"
                        className="rounded-t-lg h-60"
                    />
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-blue-500 font-semibold">12 JAN</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">
                            We had a great experience on Bandarban
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Ipsum.
                        </p>
                        <div className="flex items-center">
                            <img
                                src="/icons/volunteer.svg"
                                alt="Author"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="text-gray-700 font-semibold">By Milan</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md max-w-xs">
                    <img
                        src="/images/sea-3243357_1280.jpg"
                        alt="Experience in Bandarban"
                        className="rounded-t-lg h-60"
                    />
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-blue-500 font-semibold">10 JAN</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">
                            We had a great experience on Bandarban
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Ipsum.
                        </p>
                        <div className="flex items-center">
                            <img
                                src={defaultImage}
                                alt="Author"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="text-gray-700 font-semibold">By Davis Roger</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md max-w-xs">
                    <img
                        src="/images/Sylhet.jpg"
                        alt="Experience in Bandarban"
                        className="rounded-t-lg h-60"
                    />
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-blue-500 font-semibold">12 JAN</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">
                            We had a great experience on Bandarban
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Ipsum.
                        </p>
                        <div className="flex items-center">
                            <img
                                src="/icons/volunteer.svg"
                                alt="Author"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="text-gray-700 font-semibold">By Milan</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <button className="bg-[#006D5A] text-white px-4 py-2 rounded-full">
                    View More
                </button>
            </div>
        </section>
    );
}

export default Blog;
