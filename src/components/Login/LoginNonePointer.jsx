import PropTypes from "prop-types";
import IconButton from "../buttons/IconButton";
export default function LoginNonePointer({ onClose, className, setIsLoginActive }) {
	return (
		<div className={`your-existing-classes ${className}`}>
			<div className="custom-gradient custom-backdrop-filter  h-screen mt-[160px] w-[455px]">
				<div className="flex justify-end cursor-pointer h-8" onClick={onClose}>
					<img src="/icons/close-fill.svg" alt="close" />
				</div>
				<div className="">
					<div>
						<div className="flex justify-center items-center">
							<img
								src="/images/hoohSignINLogosvg.svg"
								alt="logo"
								className="mb-4 w-72"
							/>
						</div>
						<h2 className="text-white text-center text-4xl">Sign in</h2>
						<form>
							<div className="mt-8 text-white mb-5">
								<input
									placeholder="Email Address"
									type="email"
									name="email"
									id="email"
									className="mt-1 mx-11 p-2 block w-4/5 bg-cyan-200 bg-opacity-10 rounded-[10px] shadow-sm border border-white"
									required
								/>
							</div>

							<div className="mb-4">
								<input
									placeholder="Password"
									type="password"
									name="password"
									id="password"
									className="mt-1 mx-11 p-2 block w-4/5 bg-cyan-200 bg-opacity-10 rounded-[10px] shadow-sm border border-white"
									required
								/>
							</div>
							<div
								onClick={() => setIsLoginActive(false)}
								className="text-white cursor-pointer font-normal underline text-center"
							>
								Didn’t Registered?
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
			</div>
		</div>
	);
}

LoginNonePointer.propTypes = {
	onClose: PropTypes.func.isRequired,
	className: PropTypes.string,
};
