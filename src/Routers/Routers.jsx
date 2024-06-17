import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../layouts/BlankLayout";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Dashboard from "../pages/Dashboard";

export default function Routers() {
    return (
        <div>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route path="/booking" element={<Booking />} />
                </Route>
                <Route element={<BlankLayout />}>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </div>
    );
}
