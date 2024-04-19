import PropTypes from "prop-types";

export default function IconButton({
    onClick = () => false,
    icon,
    iconWidth = "min-w-[12px]",
    text,
    width = "w-auto",
    color = "text-neutral-800",
    bg = "bg-white",
    startIcon = true,
    border = true,
    height = "h-10",
    disabled = false,
    hideTextOnResponsive = false,
    iconClassName,
    type = "button",
}) {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`${bg} ${color} ${
                hideTextOnResponsive ? "w-auto" : width
            } ${height} inline-flex gap-2 items-center justify-center rounded-lg ${
                border ? "border border-gray-300 dark:border-slate-700" : ""
            } px-[14px] whitespace-nowrap transition-all active:scale-95`}
        >
            <img
                src={icon}
                className={`${!startIcon ? "order-3" : "order-1"} ${iconWidth} ${iconClassName} ${
                    disabled && "opacity-60"
                }`}
            />
            {text && (
                <span
                    className={`text-sm font-inter font-medium leading-snug ${
                        hideTextOnResponsive ? "hidden sm:inline" : "inline"
                    } ${!startIcon ? "order-1" : "order-3"} ${disabled && "text-[#98A1B2]"}`}
                >
                    {text}
                </span>
            )}
        </button>
    );
}

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    border: PropTypes.bool,
    text: PropTypes.string,
    iconWidth: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    bg: PropTypes.string,
    type: PropTypes.string,
    startIcon: PropTypes.bool,
    height: PropTypes.string,
    iconClassName: PropTypes.string,
    disabled: PropTypes.bool,
    hideTextOnResponsive: PropTypes.bool,
};
