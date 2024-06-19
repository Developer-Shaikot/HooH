import { useState } from "react";
import LoginNonePointer from "./LoginNonePointer";
import RegNonePointer from "./RegNonePointer";

function LoginForm({ onClose }) {
	const [isLoginActive, setIsLoginActive] = useState(true);

	return (
		<div className={`fixed inset-0 flex items-center justify-end z-50 pointer-events-none`}>
			{isLoginActive ? (
				<LoginNonePointer
					setIsLoginActive={setIsLoginActive}
					onClose={() => onClose(false)}
					className="pointer-events-auto"
				/>
			) : (
				<RegNonePointer
					setIsLoginActive={setIsLoginActive}
					onClose={() => onClose(false)}
					className="pointer-events-auto"
				/>
			)}
		</div>
	);
}

export default LoginForm;
