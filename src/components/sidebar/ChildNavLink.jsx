import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function ChildNavLink({ routeInfo }) {
    return (
        <div className="mb-[12px] w-[190px] ml-auto relative before:content-[''] before:absolute before:w-[10px] before:top-[18px] before:left-[-18px] before:h-[1px] before:bg-default-theme-200 after:content-[''] after:absolute after:w-[3px] after:top-[17px] after:rotate-[46deg] after:left-[-17px] after:h-[1px] after:bg-default-theme-200">
            <NavLink
                to={routeInfo.link}
                className="flex h-[36px] mt-[3px] items-center gap-[12px] p-[12px]"
            >
                <span className="font-manrope text-gray-300 text-base leading-tight whitespace-nowrap px-[2px]">
                    {routeInfo.title}
                </span>
            </NavLink>
        </div>
    );
}

ChildNavLink.propTypes = {
    routeInfo: PropTypes.object.isRequired,
};
