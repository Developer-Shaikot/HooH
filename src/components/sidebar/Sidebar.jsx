// import Brand from "./Brand";
// import PortalPageButton from "./PortalPageButton";

import { sidebarStatus, close } from "../../feature/drawer/drawerSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";

import { adminLinks, navLinks } from "../../../constant";
import Navlinks from "./Navlinks";
import { useAuth } from "../../hooks/useAuth";

export const Sidebar = () => {
	const { user } = useAuth();
	const isSidebarOpen = useSelector(sidebarStatus);
	const dispatch = useDispatch();

	return (
		<OutsideClickHandler disabled={!isSidebarOpen} onOutsideClick={() => dispatch(close())}>
			<aside
				id="sidebar"
				className={`w-[280px] h-[calc(100vh-80px)] bg-zinc-100 fixed top-[82px] ${
					isSidebarOpen ? "left-0" : "lg:left-[-300px] left-[-300px]"
				} transition-all lg:left-0 overflow-y-auto z-20`}
			>
				<div className="p-[12px] mt-5">
					{user?.user_type === "admin" &&
						adminLinks.map((routeInfo) => (
							<Navlinks key={routeInfo.title} routeInfo={routeInfo} />
						))}
					{navLinks.map((routeInfo) => (
						<Navlinks key={routeInfo.title} routeInfo={routeInfo} />
					))}
				</div>
			</aside>
		</OutsideClickHandler>
	);
};
