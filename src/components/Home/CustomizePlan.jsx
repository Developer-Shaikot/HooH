export default function CustomizePlan() {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 py-5">
                <div className="flex flex-col items-center">
                    <div className="text-gray-900 text-4xl font-semibold py-28">
                        Customize Your Tour Plan
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-96">
                            <div className="py-5">
                                <label className="text-gray-900 text-2xl font-semibold">
                                    Location
                                </label>
                                <select
                                    className="w-full h-14 bg-white rounded shadow border border-emerald-700 border-opacity-30"
                                    placeholder="Enter City Name to Travel"
                                />
                            </div>
                            <div className="py-5">
                                <label className="text-gray-900 text-2xl font-semibold ">
                                    Phone Number
                                </label>
                                <input
                                    className="w-full h-14 bg-white rounded shadow border border-emerald-700 border-opacity-30"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="py-5">
                                <label className="text-gray-900 text-2xl font-semibold r">
                                    Date
                                </label>
                                <input
                                    className="w-full h-14 bg-white rounded shadow border border-emerald-700 border-opacity-30"
                                    placeholder="00/00/00"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="py-5">
                        <img src="/images/Custom.png" alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
