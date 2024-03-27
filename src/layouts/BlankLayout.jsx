import { Outlet } from "react-router-dom";

export default function BlankLayout() {
    return (
        <>
            {/* Blank layout routes (404 page, login page those page doesn't need common components like nav, sidebar etch) children will placed here by default */}
            <Outlet />
        </>
    );
}
