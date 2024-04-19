import ResponsiveBrand from "./ResponsiveBrand";
import { useState } from "react";
import Notification from "../notification/Notification";
import Overlay from "../overlay/Overlay";
import NavBrand from "./NavBrand";
import IconButton from "../buttons/IconButton";

import { Link } from "react-router-dom";

export default function Navbar() {
    const [notificationPopup, setNotificationPopup] = useState(false);

    function closeNotificationPopup() {
        setNotificationPopup(false);
    }

    return (
        <>
            <nav className="h-[82px] border-b-2 bg-default-theme dark:bg-dark-theme border-gray-200 dark:border-slate-700 ml-0 lg:ml-[220px] flex items-center gap-2 p-4 md:p-6 justify-between sticky top-0 z-20">
                <div className="flex items-center gap-5">
                    <ResponsiveBrand />
                    <NavBrand />
                </div>

                <div className="flex items-center gap-5 xs:gap-6">
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
                        <Link to="/book-now">
                            <IconButton
                                width="w-[148px]"
                                bg="bg-white"
                                color="text-black"
                                icon="/icons/material-symbols--book-online.svg"
                                text="Book Now"
                                iconClassName="dark:invert dark:brightness-0"
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
        </>
    );
}
