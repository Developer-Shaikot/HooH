import PropTypes from "prop-types";
import Label from "../labels/Label";
import { useNavigate } from "react-router-dom";

export default function SelectableTd({ data, selectRow = () => false, selectedData }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-0.5 py-3">
            <div className="flex gap-2">
                {data.visibleCheckbox && (
                    <div className="flex  items-center">
                        <input
                            type="checkbox"
                            onChange={(e) => selectRow(data.id, e)}
                            checked={Boolean(selectedData.find((id) => data.id === id))}
                            className="form-checkbox cursor-pointer accent-default-theme w-5 h-5 mx-3 rounded-md"
                        />
                    </div>
                )}

                <div className="flex flex-col gap-2.5">
                    <div>
                        <span
                            className="text-neutral-800 font-semibold cursor-pointer"
                            onClick={() =>
                                navigate(`/order/invoices/${data.id.slice(1)}`, {
                                    state: data,
                                })
                            }
                        >
                            {data.id}
                        </span>
                        <div className="mt-2 mb-2 font-medium">
                            {Array.isArray(data.status) ? (
                                // If status is an array
                                data.status.map((status, index) => (
                                    <div key={index} style={{ marginBottom: "8px" }}>
                                        <Label title={status.title} type={status.type} />
                                    </div>
                                ))
                            ) : (
                                // If status is not an array
                                <div style={{ marginBottom: "8px" }}>
                                    <Label title={data.status.title} type={data.status.type} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SelectableTd.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        visibleCheckbox: PropTypes.bool,
        status: PropTypes.oneOfType([
            PropTypes.object, // for single status object
            PropTypes.arrayOf(PropTypes.object), // for array of status objects
        ]).isRequired,
    }).isRequired,
    selectedData: PropTypes.array,
    selectRow: PropTypes.func,
    icon: PropTypes.bool,
};
