export default function TopVlaueSection() {
    return (
        <section>
            <div className="flex flex-col items-center py-16">
                <div className="text-4xl text-gray-900 font-semibold ">Top Values For You</div>
                <div className="text-sm text-gray-900 font-semibold  py-2">
                    Choice your tour guider and enjoy your best trip with HOOH!
                </div>
            </div>
            <div className="grid grid-cols-3 py-5">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-24 h-24 bg-teal-300 bg-opacity-20 rounded-full">
                        <img src="/icons/edit-vector.svg" alt="" className="w-8 h-8" />
                    </div>
                    <div className="text-black font-semibold mt-5">Easy Booking</div>
                    <div className="w-full sm:w-80 text-center text-neutral-500 text-lg font-light mt-5">
                        Panam Nagar, Old Capital, Sonargaon Museum & Boro Sardar Bari
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-24 h-24 bg-teal-300 bg-opacity-20 rounded-full">
                        <img src="/icons/grouppeople.svg" alt="" className="w-8 h-8" />
                    </div>
                    <div className="text-black font-semibold mt-5">Best Tour Guide</div>
                    <div className="w-full sm:w-80 text-center text-neutral-500 text-lg font-light mt-5">
                        Panam Nagar, Old Capital, Sonargaon Museum & Boro Sardar Bari
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-24 h-24 bg-teal-300 bg-opacity-20 rounded-full">
                        <img src="/icons/VectorBus.svg" alt="" className="w-8 h-8" />
                    </div>
                    <div className="text-black font-semibold mt-5">Transport</div>
                    <div className="w-full sm:w-80 text-center text-neutral-500 text-lg font-light mt-5">
                        Panam Nagar, Old Capital, Sonargaon Museum & Boro Sardar Bari
                    </div>
                </div>
            </div>
        </section>
    );
}
