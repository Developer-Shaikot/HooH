import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../components/ScrollTop";
import { Sidebar } from "../components/sidebar/Sidebar";

export default function BlankLayout() {
    return (
        <>
            <Navbar />
            <div className="ml-0 min-h-screen bg-white dark:bg-dark-theme">
                <ScrollToTop>
                    {/* Main layout routes children will placed here by default */}
                    <Outlet />
                </ScrollToTop>
            </div>
            <Sidebar />
        </>
    );
}
