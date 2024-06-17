import { useState } from "react";

const initialData = {
    helpName: "",
    helpAddress: "",
    helpAvatar: "",
};

const AddTour = () => {
    const [formData] = useState(initialData);

    const [fileAdded, setFileAdded] = useState(false);

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileAdded(true);
        } else {
            setFileAdded(false);
        }
    };

    return (
        <div className=" text-sky-300  pt-12 px-12 bg-gray-100 h-full">
            <form className="w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
                            htmlFor="grid-first-name"
                        >
                            Tour Name
                        </label>
                        <input
                            required
                            className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
                            type="text"
                            placeholder="name"
                            name="helpName"
                            value={formData.helpName}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <div className="flex items-center font-semibold gap-1.5">
                            <img src="/icons/select-location.svg" className="w-4" alt="" />
                            Select a place
                        </div>
                        <div>
                            <select
                                name="location"
                                className="w-full bg-transparent rounded-3xl border px-3.5 py-2.5 shadow-md border-[#006D5A6B]"
                            >
                                <option value="old-dhaka">Old dhaka</option>
                                <option value="old-dhaka">Old dhaka</option>
                                <option value="old-dhaka">Old dhaka</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <div className="flex items-center font-semibold gap-1.5">
                            <img src="/icons/select-location.svg" className="w-4" alt="" />
                            Select a city
                        </div>
                        <div>
                            <select
                                name="location"
                                className="w-full bg-transparent rounded-3xl border px-3.5 py-2.5 shadow-md border-[#006D5A6B]"
                            >
                                <option value="old-dhaka">Old dhaka</option>
                                <option value="old-dhaka">Old dhaka</option>
                                <option value="old-dhaka">Old dhaka</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <div className="flex items-center font-semibold gap-1.5">
                            <img src="/icons/select-location.svg" className="w-4" alt="" />
                            Select a category
                        </div>
                        <div>
                            <select
                                name="location"
                                className="w-full bg-transparent rounded-3xl border px-3.5 py-2.5 shadow-md border-[#006D5A6B]"
                            >
                                <option value="old-dhaka">Old dhaka</option>
                                <option value="old-dhaka">Old dhaka</option>
                                <option value="old-dhaka">Old dhaka</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full px-3">
                        <div className="mb-4">
                            <label
                                className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
                                htmlFor="image"
                            >
                                Image file
                            </label>
                            <div className="relative">
                                <input
                                    className="absolute inset-0 opacity-0 z-50"
                                    id="image"
                                    type="file"
                                    onChange={handleFileChange}
                                />
                                <div
                                    className={`h-10 w-full flex justify-center items-center border-dashed text-sky-300 border-2 border-sky-300 rounded-3xl ${
                                        fileAdded ? "border-green-400" : ""
                                    }`}
                                >
                                    {!fileAdded ? (
                                        <p className="text-gray-400">
                                            Drag and drop your image here or
                                        </p>
                                    ) : (
                                        <p className="text-green-600">
                                            Image file added or changed
                                        </p>
                                    )}
                                    <p className="ml-2 text-blue-600">browse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                    <button
                        className="bg-default-theme px-4 py-3 rounded-full text-white"
                        type="submit"
                    >
                        Add Tour
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTour;
