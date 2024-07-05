import { useState } from "react";
import ResponsiveBrand from "./ResponsiveBrand";
import Notification from "../notification/Notification";
import Overlay from "../overlay/Overlay";
import NavBrand from "./NavBrand";
import LoginForm from "../Login/LoginForm";
import { Sidebar } from "../sidebar/Sidebar";
import { useAuth } from "../../hooks/useAuth";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useLogoutMutation } from "../../feature/auth/authSlice";
import { toast } from "sonner";
import { defaultImage } from "../../../constant";

export default function Navbar() {
    const { user, resetAuth } = useAuth();
    const [notificationPopup, setNotificationPopup] = useState(false);
    const [loginFormVisible, setLoginFormVisible] = useState(true); // State for login form visibility
    const [sidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility
    const [logout, { isLoading }] = useLogoutMutation();

    function closeNotificationPopup() {
        setNotificationPopup(false);
    }

    function toggleSidebar() {
        setSidebarVisible(!sidebarVisible);
    }

    function handleLogout() {
        logout()
            .unwrap()
            .then((data) => {
                if (data.success) {
                    setLoginFormVisible(true);
                    toast.success("Logout successful");
                    resetAuth();
                }
            });
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
                    {user?._id ? (
                        <Popover className="relative">
                            <PopoverButton className="mt-1.5">
                                <div className="relative">
                                    <img
                                        src={user?.profilePicture || defaultImage}
                                        className="w-8 h-8 rounded-full leading-[0]"
                                        alt=""
                                    />
                                </div>
                            </PopoverButton>
                            <PopoverPanel
                                anchor="bottom"
                                className="flex flex-col bg-slate-100 rounded-xl z-[60] mt-3 p-3 shadow-lg"
                            >
                                <p>{user?.name}</p>
                                <div className="border-gray-400 border-b my-2" />
                                <div
                                    onClick={handleLogout}
                                    className="hover:bg-slate-50 rounded-md py-1 px-2 cursor-pointer flex items-center gap-1"
                                >
                                    <ArrowRightStartOnRectangleIcon className="size-5 text-red-500" />{" "}
                                    <p>{isLoading ? "Loading..." : "Logout"}</p>
                                </div>
                            </PopoverPanel>
                        </Popover>
                    ) : (
                        <div
                            className="w-8 h-8 flex items-center mr-3 cursor-pointer"
                            title="login"
                            onClick={() => setLoginFormVisible(true)}
                        >
                            <div className="cursor-pointer relative text-white font-semibold">
                                Login
                            </div>
                        </div>
                    )}
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
                </div>
            </nav>
            {notificationPopup && (
                <Overlay>
                    <Notification closeNotificationPopup={closeNotificationPopup} />
                </Overlay>
            )}
            {!user?._id && <>{loginFormVisible && <LoginForm onClose={setLoginFormVisible} />}</>}
            {sidebarVisible && <Sidebar />}
        </>
    );
}
