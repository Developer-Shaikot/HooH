export default function BookingAbout({ description, packageAvatar, price }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-y-6 sm:gap-8">
            <div className="col-span-2 border-2 font-poppins rounded-xl border-[#006D5A6B] px-6 py-5">
                <h1 className="font-semibold text-[26px] text-black-50">About</h1>
                <p className="text-[#594E4E] mt-2 mb-1">{description}</p>
                <span className="text-[#594E4E] font-semibold underline cursor-pointer">
                    Read More
                </span>
                <br />
                <div className="border-dashed text-[20px] border-[2px] mb-2 inline-block rounded-md px-4 py-2 border-primary mt-6">
                    Total Tour Price:{" "}
                    <span className="text-primary font-semibold">{price} BDT</span>
                </div>
                <div className="flex flex-col my-4 gap-1">
                    <a
                        target="_blank"
                        href="https://youtu.be/E2Df6iwT-SA?si=1n-rhgq8rfPDmQtW"
                        className="inline-flex gap-2"
                    >
                        <img src="/icons/video.svg" className="w-5" alt="" />
                        <span className="text-blue-400 underline">Watch Video </span>
                    </a>
                    <div className="inline-flex gap-2">
                        <img src="/icons/visitor.svg" className="w-5" alt="" />
                        <span className="text-[#594E4E]">Most Visited city by the tourist</span>
                    </div>
                </div>
                <button className="bg-primary text-sm rounded-full px-3.5 py-1.5 text-white">
                    More options
                </button>
            </div>
            {/* ---------- full place image section --------- */}
            <div className="col-span-3 rounded-xl">
                <img
                    src={packageAvatar ? packageAvatar : "/images/dhaka-city.png"}
                    className="h-full w-full object-cover rounded-xl"
                    alt="dhaka"
                />
            </div>
        </div>
    );
}
