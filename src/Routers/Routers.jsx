import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../layouts/BlankLayout";
import NotFoundPage from "../pages/NotFoundPage";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Dashboard from "../pages/Dashboard";
import Admin from "./Admin";
import Protected from "./Protected";

export default function Routers() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route
					path="/dashboard"
					element={
						<Admin>
							<Dashboard />
						</Admin>
					}
				/>
			</Route>
			<Route element={<MainLayout />}>
				<Route
					path="/booking/:packageId"
					element={
						<Protected>
							<Booking />
						</Protected>
					}
				/>
			</Route>
			<Route element={<BlankLayout />}>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}
