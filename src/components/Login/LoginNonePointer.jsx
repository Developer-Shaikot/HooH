import PropTypes from "prop-types";
import IconButton from "../buttons/IconButton";
export default function LoginNonePointer({ onClose, className }) {
    return (
        <div className={`your-existing-classes ${className}`}>
            <div className="custom-gradient custom-backdrop-filter  h-screen mt-[160px] w-[455px] p-4 rounded shadow-lg">
                <div className="flex justify-end cursor-pointer" onClick={onClose}>
                    <img src="/icons/close-black.svg" alt="close" />
                </div>

                <div className="flex flex-col items-center justify-center space-y-4">
                    <img src="/images/hooh-logo.png" alt="logo" className="mb-4" />
                    <h2 className="text-white">Sign IN</h2>
                </div>
                <form>
                    <div className="mt-14 mb-5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 mx-11 p-2 block w-4/5 bg-cyan-200 bg-opacity-10 rounded-[10px] shadow-sm border border-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="mt-1 mx-11 p-2 block w-4/5 bg-cyan-200 bg-opacity-10 rounded-[10px] shadow-sm border border-white"
                            required
                        />
                    </div>
                    <div className="text-white font-normal underline text-center">
                        Didn’t Register?
                    </div>
                    <div className="flex justify-center mt-5">
                        <IconButton
                            width="w-[100px]"
                            bg="bg-white"
                            color="text-black"
                            text="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

LoginNonePointer.propTypes = {
    onClose: PropTypes.func.isRequired,
    className: PropTypes.string,
};
