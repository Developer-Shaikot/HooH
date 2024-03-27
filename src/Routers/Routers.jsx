import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";

export default function Routers() {
    return (
        <div>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={
                            <Home />
                            // 	</Admin>
                            // </LoggedIn>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}
