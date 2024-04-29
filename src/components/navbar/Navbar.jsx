import { useState } from "react";
import ResponsiveBrand from "./ResponsiveBrand";
import Notification from "../notification/Notification";
import Overlay from "../overlay/Overlay";
import NavBrand from "./NavBrand";
import IconButton from "../buttons/IconButton";
import LoginForm from "../Login/LoginForm";
import { Sidebar } from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [notificationPopup, setNotificationPopup] = useState(false);
	const [loginFormVisible, setLoginFormVisible] = useState(true); // State for login form visibility
	const [sidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

	function closeNotificationPopup() {
		setNotificationPopup(false);
	}

	function toggleLoginForm() {
		setLoginFormVisible(!loginFormVisible);
		console.log("loginForm");
	}

	function toggleSidebar() {
		setSidebarVisible(!sidebarVisible);
	}

	return (
		<>
			<nav className="h-[82px] bg-default-theme dark:bg-dark-theme border-gray-200 dark:border-slate-700 ml-0 flex items-center gap-2 p-4 md:p-6 justify-between z-50 sticky top-0">
				<div className="flex items-center gap-5">
					<ResponsiveBrand />
					<NavBrand />
				</div>

				<div className="flex items-center gap-5 xs:gap-6">
					{/* Hamburger menu should toggle the sidebar, not the login form */}
					<button onClick={toggleSidebar} className="md:hidden">
						{/* Hamburger icon */}
					</button>
					<div className="w-8 h-8 flex items-center" title="Notification">
						<div className="cursor-pointer relative">
							<img
								className="invert dark:invert dark:brightness-50 lg:invert-0 brightness-0 lg:brightness-100"
								src="/icons/message.svg"
								alt=""
							/>
						</div>
					</div>
					<div className="w-8 h-8 flex items-center" title="Notification">
						<div
							className="cursor-pointer relative"
							onClick={() => setNotificationPopup(true)}
						>
							<img
								className="invert dark:invert dark:brightness-50 lg:invert-0 brightness-0 lg:brightness-100"
								src="/icons/Notification-new.svg"
								alt="notification"
							/>
						</div>
					</div>
					<div className="hidden md:block">
						<Link to="/booking">
							<IconButton
								width="w-[120px]"
								bg="bg-white"
								color="text-black"
								text="Book Now"
								onClick={toggleLoginForm}
							/>
						</Link>
					</div>
				</div>
			</nav>
			{notificationPopup && (
				<Overlay>
					<Notification closeNotificationPopup={closeNotificationPopup} />
				</Overlay>
			)}
			{loginFormVisible && <LoginForm onClose={toggleLoginForm} />}
			{sidebarVisible && <Sidebar />}
		</>
	);
}
