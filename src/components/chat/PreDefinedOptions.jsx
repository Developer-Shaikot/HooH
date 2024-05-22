import PropTypes from "prop-types";

const buttonInfo = [
	"Start a live chat",
	"Create a ticket",
	"Request a callback",
	"Go to support portal",
];

export default function PreDefinedOptions() {
	return (
		<div className={`flex gap-2.5 mb-4 float-left`}>
			<div className="inline-block bg-[#f0f4f9] p-2 rounded-md text-sm min-w-[250px]">
				What would you like to do?
				<div className="flex flex-col gap-2 mt-3">
					{buttonInfo.map((info, index) => (
						<button className="w-full bg-white text-left rounded px-2 py-2.5" key={index}>{info}</button>
					))}
				</div>
			</div>
		</div>
	);
}

PreDefinedOptions.propTypes = {
	index: PropTypes.number,
	text: PropTypes.string,
};
