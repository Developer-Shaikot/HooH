import PropTypes from "prop-types";

export default function VolunteerTd({ data, selectRow = () => false, selectedData }) {
    return (
        <div className="flex items-center gap-2">
            {data.visibleCheckbox && (
                <input
                    type="checkbox"
                    onChange={(e) => selectRow(data.id, e)}
                    checked={Boolean(selectedData.find((id) => data.id === id))}
                    className="form-checkbox cursor-pointer accent-default-theme w-5 h-5 mx-3 rounded-md"
                />
            )}

            <img src={data?.image} alt={data?.name} className="w-11 h-11 rounded-lg" />
            <span className="text-neutral-800 text-sm font-medium">{data?.name}</span>
        </div>
    );
}

VolunteerTd.propTypes = {
    data: PropTypes.object.isRequired,
    selectRow: PropTypes.func,
    selectedData: PropTypes.array,
};
