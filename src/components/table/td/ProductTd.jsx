import PropTypes from "prop-types";

export default function ProductTd({ data, selectRow = () => false, selectedData }) {
	return (
		<div className="flex items-center gap-2">
			{data.visibleCheckbox && (
				<input
					type="checkbox"
					onChange={(e) => selectRow(data._id, e)}
					checked={Boolean(selectedData.find((id) => data._id === id))}
					className="form-checkbox cursor-pointer accent-default-theme w-5 h-5 mx-3 rounded-md"
				/>
			)}

			<span className="text-neutral-800 text-sm font-medium">{data?.txId}</span>
		</div>
	);
}

ProductTd.propTypes = {
	data: PropTypes.object.isRequired,
	selectRow: PropTypes.func,
	selectedData: PropTypes.array,
};
