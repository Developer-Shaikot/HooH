import { Link } from "react-router-dom";
import IconButton from "../buttons/IconButton";

export default function CustomizePlan() {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 py-5">
                <div className="px-20">
                    <div className="text-gray-900 text-4xl font-semibold py-28">
                        Customize Your Tour Plan
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center font-semibold gap-1.5 mb-3">
                            <img src="/icons/select-location.svg" className="w-4" alt="" />
                            Select a place
                        </div>
                        <div>
                            <select
                                name="location"
                                className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
                            >
                                <option value="old-dhaka">Old dhaka</option>
                                <option value="old-dhaka">Old dhaka</option>
                                <option value="old-dhaka">Old dhaka</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center font-semibold gap-1.5 mb-3">
                            <img src="/icons/duration.svg" className="w-4" alt="" />
                            Phone Number
                        </div>
                        <div>
                            <input
                                className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center font-semibold gap-1.5 mb-3">
                            <img src="/icons/calendar.svg" className="w-4" alt="" />
                            Date
                        </div>
                        <div>
                            <input
                                type="date"
                                name="startDate"
                                className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
                            />
                        </div>
                    </div>
                    <div className="mt-12">
                        <Link to="/booking">
                            <IconButton
                                height="h-10"
                                width="w-[120px]"
                                bg="bg-[#006D5A]"
                                color="text-white"
                                text="Book Now"
                            />
                        </Link>
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
