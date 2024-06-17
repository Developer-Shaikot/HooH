import PropTypes from "prop-types";

export default function ShowMoreData({ toggleMore, showMore, children }) {
    return (
        <div className="block md:hidden">
            <div className="flex items-center mt-2 cursor-pointer" onClick={toggleMore}>
                <img
                    className="w-4 h-4 grayscale invert-[50%]"
                    src={showMore ? "/icons/subtract.svg" : "/icons/add.svg"}
                    alt="show more"
                />
                <div className="text-gray-500 text-xs font-public-sans	 font-medium select-none leading-none">
                    {showMore ? "Less" : "More"}
                </div>
            </div>
            {showMore && <div className="mt-1.5">{children}</div>}
        </div>
    );
}

ShowMoreData.propTypes = {
    toggleMore: PropTypes.func,
    showMore: PropTypes.bool,
    children: PropTypes.node,
};
