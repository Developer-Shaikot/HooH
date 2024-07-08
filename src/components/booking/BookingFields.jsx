export default function BookingFields({ formData, handleChange, tourData }) {
    return (
        <div className="bg-[url(/images/wave.svg)] bg-bottom bg-no-repeat col-span-2 border-2 font-poppins rounded-xl border-[#006D5A6B] px-6 pt-5 pb-16 sm:pb-6">
            <div className="mt-3">
                <div className="flex items-center font-semibold gap-1.5 mb-3">
                    <img src="/icons/duration.svg" className="w-4" alt="" />
                    Mobile number
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="+880"
                        onChange={handleChange}
                        value={formData.mobile}
                        name="mobile"
                        required
                        className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
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
                        name="date"
                        onChange={handleChange}
                        value={formData.date}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
                    />
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center font-semibold gap-1.5 mb-3">
                    <img src="/icons/duration.svg" className="w-4" alt="" />
                    Duration (days)
                </div>
                <div>
                    <input
                        placeholder="00"
                        readOnly
                        type="text"
                        required
                        defaultValue={`${tourData?.duration} days/s`}
                        className="w-full border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
                    />
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center font-semibold gap-1.5 mb-3">
                    <img src="/icons/traveler.svg" className="w-4" alt="" />
                    Add Traveler
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="00"
                        min={1}
                        value={formData.travelers}
                        onChange={handleChange}
                        name="travelers"
                        required
                        className="w-full bg-white border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
                    />
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center font-semibold gap-1.5 mb-3">
                    <img src="/icons/transport.svg" className="w-4" alt="" />
                    Select transport
                </div>
                <div>
                    <select
                        required
                        name="transport"
                        onChange={handleChange}
                        className="w-full bg-white border px-3.5 py-2.5 rounded-md shadow-md border-[#006D5A6B]"
                    >
                        <option value="">Choose a travel method</option>
                        <option value="road">Road (0tk)</option>
                        <option value="car">Car (+300tk)</option>
                        <option value="bike">Bike (+200tk)</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
