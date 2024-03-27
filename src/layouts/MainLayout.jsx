import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollTop";
import Navbar from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <div className="ml-0 lg:ml-[260px] min-h-screen bg-white dark:bg-dark-theme">
                <ScrollToTop>
                    {/* Main layout routes children will placed here by default */}
                    <Outlet />
                </ScrollToTop>
            </div>
            <Sidebar />
        </>
    );
}
