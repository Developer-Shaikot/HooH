import PropTypes from "prop-types";
import IconButton from "../buttons/IconButton";
import { useState } from "react";
import { toast } from "sonner";
import { useRegisterGuideMutation } from "../../feature/apply/applySlice";
import { useRegisterMutation } from "../../feature/auth/authSlice";

const defaultData = {
    name: "",
    email: "",
    password: "",
    volunteer: false,
    nidNumber: "",
    vehicle_type: "",
};

export default function RegNonePointer({ onClose, className, setIsLoginActive }) {
    const [revalNid, setRevealNid] = useState(false);
    const [formData, setFormData] = useState(defaultData);
    const [registerGuide, { isLoading: isUpdating }] = useRegisterGuideMutation();
    const [register, { isLoading: isRegistering }] = useRegisterMutation();

    const toggleNid = () => {
        setRevealNid(!revalNid);
        setFormData((prev) => ({ ...prev, volunteer: !prev.volunteer }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.volunteer) {
            registerGuide(formData)
                .unwrap()
                .then((data) => {
                    if (data.success) {
                        toast.success(
                            "Applied successfully, wait until admin approve your application then you will be able to login as a guide."
                        );
                        setIsLoginActive(true);
                    } else {
                        toast.error(`Error: ${data?.message}`);
                        console.error(data);
                    }
                })
                .catch((err) => toast.error(`Error: ${err.data?.message}`));
        } else {
            register(formData)
                .unwrap()
                .then((data) => {
                    if (data.success) {
                        toast.success("Registered successfully");
                        setIsLoginActive(true);
                    } else {
                        toast.error(`Error: ${data?.message}`);
                        console.error(data);
                    }
                })
                .catch((err) => toast.error(`Error: ${err.data?.message}`));
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className={`your-existing-classes ${className}`}>
            <div className="custom-gradient custom-backdrop-filter  h-screen mt-[160px] w-[300px] sm:w-[455px]">
                <div className="flex justify-end cursor-pointer h-8" onClick={onClose}>
                    <img src="/icons/close-fill.svg" alt="close" />
                </div>
                <div className="">
                    <div>
                        <div className="flex items-center justify-center text-center">
                            <div>
                                <div className="flex justify-center items-center">
                                    <img
                                        src="/images/hoohSignINLogosvg.svg"
                                        alt="logo"
                                        className="mb-4 w-72"
                                    />
                                </div>
                                <h2 className="text-white text-center text-4xl">Sign up</h2>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-6 text-white mb-5">
                                <input
                                    placeholder="Full name"
                                    name="name"
                                    id="name"
                                    className="mt-1 mx-11 p-2 block w-4/5 bg-cyan-200 bg-opacity-10 rounded-[10px] shadow-sm border border-white placeholder-white"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="text-white mb-5">
                                <input
                                    placeholder="Email Address"
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 mx-11 p-2 block w-4/5 bg-cyan-200 bg-opacity-10 rounded-[10px] shadow-sm border border-white placeholder-white"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="mt-1 mx-11 p-2 block w-4/5 text-white bg-cyan-200 bg-opacity-10 rounded-[10px] shadow-sm border border-white placeholder-white"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mx-11 text-gray-50 mb-3 cursor-pointer inline-block">
                                <input
                                    onClick={toggleNid}
                                    className="cursor-pointer"
                                    type="checkbox"
                                />{" "}
                                <label>Want to become a volunteer?</label>
                            </div>
                            {revalNid && (
                                <>
                                    <div className="mb-4">
                                        <input
                                            placeholder="NID card number (10 digit)"
                                            name="nidNumber"
                                            id="nid"
                                            className="mt-1 mx-11 p-2 block w-4/5 text-white bg-cyan-200 bg-opacity-10 rounded-[10px] shadow-sm border border-white"
                                            required
                                            value={formData.nidNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <select
                                            required
                                            name="vehicle_type"
                                            onChange={handleChange}
                                            className="mt-1 text-yellow-50 mx-11 p-2 block w-4/5 bg-cyan-200 bg-opacity-10 rounded-[10px] shadow-sm border border-white"
                                        >
                                            <option className="text-black" value="">
                                                Choose a vehicle type
                                            </option>
                                            <option className="text-black" value="car">
                                                Car
                                            </option>
                                            <option className="text-black" value="bike">
                                                Bike
                                            </option>
                                        </select>
                                    </div>
                                </>
                            )}
                            <div
                                onClick={() => setIsLoginActive(true)}
                                className="text-white font-normal cursor-pointer underline text-center"
                            >
                                Already Registered?
                            </div>
                            <div className="flex justify-center mt-5">
                                <IconButton
                                    width="w-[140px]"
                                    bg="bg-white"
                                    color="text-black"
                                    text="Registration"
                                    type="submit"
                                    disabled={isRegistering || isUpdating}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

RegNonePointer.propTypes = {
    onClose: PropTypes.func.isRequired,
    className: PropTypes.string,
};
