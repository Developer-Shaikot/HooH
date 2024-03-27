import PropTypes from "prop-types";
import { NavLink as NavigationLink } from "react-router-dom";
import ChildNavLink from "./ChildNavLink";
import { useState } from "react";

export default function Navlinks({ routeInfo }) {
    const [open, setOpen] = useState(false);

    const handleExpand = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="mb-5">
                <span className="font-manrope text-gray-300 text-base select-none leading-tight whitespace-nowrap">
                    {routeInfo.title}
                </span>
                {routeInfo.links.map((link, index) => (
                    <NavigationLink
                        key={index}
                        to={link.link}
                        className="flex h-12 items-center gap-[12px] p-[12px] mt-5"
                        onClick={handleExpand}
                    >
                        <span className="inline-block">
                            <img src={link.icon} alt={link.name} />
                        </span>

                        <span className="font-manrope text-gray-300 text-base select-none leading-tight whitespace-nowrap">
                            {link.name}
                        </span>
                    </NavigationLink>
                ))}
                <br />
                {routeInfo.extend && (
                    <img
                        src={open ? "/icons/chev-down.svg" : "/icons/chev-right-white.svg"}
                        className="ml-auto mt-[2px]"
                        alt="down"
                    />
                )}
            </div>
            <div className="relative before:content-[''] before:w-[1px] before:h-full before:absolute before:bg-default-theme-200 before:left-[22px]">
                {routeInfo.extend &&
                    open &&
                    routeInfo.extend.map((childRouteInfo) => (
                        <ChildNavLink key={childRouteInfo.title} routeInfo={childRouteInfo} />
                    ))}
            </div>
        </>
    );
}

Navlinks.propTypes = {
    routeInfo: PropTypes.object.isRequired,
};
