import { open, sidebarStatus } from "../../feature/drawer/drawerSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ResponsiveBrand() {
    const dispatch = useDispatch();
    const isActiveDrawer = useSelector(sidebarStatus);

    return (
        <div className="flex gap-4 items-start lg:hidden">
            {isActiveDrawer ? (
                <div className="order-2">
                    <button className="w-9 h-9 flex items-center justify-center cursor-pointer">
                        <img
                            className="w-5 h-5 brightness-0 invert"
                            src="/icons/close-fill.svg"
                            alt="menu"
                        />
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => dispatch(open())}
                    className="w-9 h-9  flex items-center justify-center cursor-pointer"
                >
                    <img src="/icons/Hamburger.svg" alt="menu" />
                </button>
            )}
        </div>
    );
}
