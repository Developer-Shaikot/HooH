import { useState } from "react";
import { categories, cities } from "../../../constant";
import { useAddTourMutation } from "../../feature/tour/tourSlice";
import { toast } from "sonner";

const initialData = {
    name: "",
    description: "",
    duration: 0,
    price: 0,
    packageAvatar: null,
    city: "",
    place: "",
    category: "",
};

const AddTour = () => {
    const [fileFieldKey, setFileFieldKey] = useState(1);
    const [addTour, { isLoading }] = useAddTourMutation();
    const [formData, setFormData] = useState(initialData);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setFile(file);
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addTour({ ...formData, packageAvatar: file })
            .unwrap()
            .then((data) => {
                if (data.success) {
                    toast.success("Tour add successfully");
                    setFormData(initialData);
                    e.target.reset();
                    setPreviewUrl(null);
                    setFileFieldKey(Date.now());
                } else {
                    toast.error(`Error: ${data.message}`);
                    console.error(data);
                }
            })
            .catch((err) => {
                toast.error(`Error: ${err.data?.message}`);
                console.error(err);
            });
    };

    return (
        <div className=" text-[#006d5a]  pt-12 px-12 bg-gray-100 h-full">
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-[#006d5a] text-xs font-bold mb-2 ml-5"
                            htmlFor="grid-first-name"
                        >
                            Tour Name
                        </label>
                        <input
                            required
                            className="appearance-none block w-full border-[#006D5A6B] text-[#006d5a] border py-3 px-4 mb-3 leading-tight focus:outline-none focus rounded-3xl"
                            type="text"
                            placeholder="Tour name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <div className="flex items-center font-semibold gap-1.5">
                            <img src="/icons/select-location.svg" className="w-4" alt="" />
                            Select a category
                        </div>
                        <div>
                            <select
                                name="category"
                                required
                                onChange={handleChange}
                                className="w-full rounded-3xl border px-3.5 py-2.5 shadow-md border-[#006D5A6B]"
                            >
                                <option value="">Choose a category</option>
                                {categories.map((data, index) => (
                                    <option key={index} value={data.name}>
                                        {data.name}
                                    </option>
                                ))}
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
                                name="city"
                                required
                                onChange={handleChange}
                                className="w-full rounded-3xl border px-3.5 py-2.5 shadow-md border-[#006D5A6B]"
                            >
                                <option value="">Choose City</option>
                                {Object.keys(cities).map((city, index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <div className="flex items-center font-semibold gap-1.5">
                            <img src="/icons/select-location.svg" className="w-4" alt="" />
                            Select a place
                        </div>
                        <div>
                            <select
                                name="place"
                                required
                                onChange={handleChange}
                                className="w-full rounded-3xl border px-3.5 py-2.5 shadow-md border-[#006D5A6B]"
                            >
                                <option value="">Choose place</option>
                                {!cities[formData.city] ? (
                                    <option value="">Select a city first</option>
                                ) : (
                                    cities[formData.city]?.areas.map((area) => (
                                        <option key={area} value={area}>
                                            {area}
                                        </option>
                                    ))
                                )}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        className="block uppercase tracking-wide text-[#006d5a] text-xs font-bold mb-2 ml-5"
                        htmlFor="description"
                    >
                        Tour Full Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        onChange={handleChange}
                        placeholder="Overall tour place description here..."
                        rows={4}
                        required
                        value={formData.description}
                        className="block w-full border-[#006D5A6B] text-[#006d5a] border py-3 px-4 mb-3 leading-tight focus:outline-none focus rounded-3xl"
                    ></textarea>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-[#006d5a] text-xs font-bold mb-2 ml-5"
                            htmlFor="grid-first-name"
                        >
                            Tour Duration (days)
                        </label>
                        <input
                            required
                            className="appearance-none block w-full border-[#006D5A6B] text-[#006d5a] border py-3 px-4 mb-3 leading-tight focus:outline-none focus rounded-3xl"
                            type="number"
                            min={1}
                            placeholder="Tour duration"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-[#006d5a] text-xs font-bold mb-2 ml-5"
                            htmlFor="grid-first-name"
                        >
                            Tour Price (BDT)
                        </label>
                        <input
                            required
                            className="appearance-none block w-full border-[#006D5A6B] text-[#006d5a] border py-3 px-4 mb-3 leading-tight focus:outline-none focus rounded-3xl"
                            type="number"
                            min={300}
                            placeholder="Tour price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <div className="w-full px-3">
                        <div className="mb-4">
                            <label
                                className="block uppercase tracking-wide text-[#006d5a]	 text-xs font-bold mb-2 ml-5"
                                htmlFor="image"
                            >
                                Image file
                            </label>
                            <div className="relative" key={fileFieldKey}>
                                <input
                                    className="absolute cursor-pointer inset-0 opacity-0 z-50"
                                    id="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <div
                                    className={`h-10 w-full flex justify-center items-center border-dashed text-[#006d5a] border-2 border-[#006D5A6B] rounded-3xl ${
                                        file ? "border-green-400" : ""
                                    }`}
                                >
                                    {!file ? (
                                        <p className="text-gray-400">
                                            Drag and drop your image here or
                                        </p>
                                    ) : (
                                        <p className="text-green-600">{file.name}</p>
                                    )}
                                    <p className="ml-2 text-blue-600">browse</p>
                                </div>
                            </div>
                            {previewUrl && (
                                <div>
                                    <img
                                        src={previewUrl}
                                        className="w-[300px] h-[200px] object-cover mt-2 rounded-xl"
                                        alt=""
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="container py-4 pb-10 px-10 mx-0 min-w-full flex flex-col items-center">
                    <button
                        disabled={isLoading}
                        className="bg-default-theme px-12 py-3 rounded-full text-white"
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
