import PropTypes from "prop-types";

export default function ExpandItem({ heading, children }) {
    return (
        <p className="mt-1">
            <span className="text-gray-500 font-public-sans	 font-semibold leading-[18px] pr-1">
                {heading}:
            </span>
            <span className="text-slate-600 font-public-sans	 font-medium leading-none"> {children}</span>
        </p>
    );
}

ExpandItem.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
};
