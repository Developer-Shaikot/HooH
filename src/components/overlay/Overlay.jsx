import PropTypes from "prop-types";
import { useEffect } from "react";

export default function Overlay({ darkish = false, children }) {
	useEffect(() => {
		document.body.style.overflowY = "hidden";
		if (document.querySelector("#sidebar")) {
			document.querySelector("#sidebar").style.overflowY = "hidden";
		}

		return () => {
			document.body.style.overflowY = "auto";
			if (document.querySelector("#sidebar")) {
				document.querySelector("#sidebar").style.overflowY = "auto";
			}
		};
	}, []);

	return (
		<div
			className={`w-full min-h-screen left-0 top-0 fixed z-40 ${
				darkish ? "bg-[#0000007e]" : "bg-[#ffffff69]"
			}`}
		>
			{children}
		</div>
	);
}

Overlay.propTypes = {
	darkish: PropTypes.bool,
	children: PropTypes.any,
};
