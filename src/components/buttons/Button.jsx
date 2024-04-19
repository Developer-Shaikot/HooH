import PropTypes from "prop-types";

export default function Button({
	text = "Click",
	width = "w-auto",
	color = "text-slate-700",
	bg = "bg-white",
	height = "h-auto",
	fontSize = "font-normal",
}) {
	return (
		<button
			className={`${bg} ${color} ${width} ${height} flex items-center leading-none rounded-lg border border-gray-300 px-[14px] whitespace-nowrap transition-all active:scale-95`}
		>
			<span className={`font-inter ${fontSize} text-inherit`}>{text}</span>
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	width: PropTypes.string,
	color: PropTypes.string,
	bg: PropTypes.string,
	fontSize: PropTypes.string,
	height: PropTypes.string,
};
