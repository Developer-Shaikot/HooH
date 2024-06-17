import PropTypes from "prop-types";
import TableData from "../td/TableData";
import { useState } from "react";
import ShowMoreData from "../td/ShowMoreData";
import ExpandItem from "../td/ExpandItem";
import VolunteerTd from "../td/VolunteerTd";
import Switch from "react-switch";

export default function VolunteerRow({ selectRow, selectedData, data }) {
    const [showMore, setShowMore] = useState(false);
    const [isAvailable, setIsAvailable] = useState(data.status);

    const toggleMore = () => setShowMore(!showMore);

    const handleToggle = () => {
        setIsAvailable(!isAvailable);
        // Optionally, you can add a function to update the status in your backend or state management
    };

    return (
        <tr>
            <TableData>
                <VolunteerTd
                    data={data.volunteer}
                    selectRow={selectRow}
                    selectedData={selectedData}
                    icon={false}
                />

                <ShowMoreData showMore={showMore} toggleMore={toggleMore}>
                    <ExpandItem heading="contactPerson">{data.contactPerson}</ExpandItem>
                    <ExpandItem heading="phone">{data.phone}</ExpandItem>
                    <ExpandItem heading="NID">{data.NID}</ExpandItem>
                </ShowMoreData>
            </TableData>
            <TableData className="hidden md:table-cell">
                <div>
                    <span className="text-neutral-800 text-sm font-semibold">
                        {data.contactPerson}
                    </span>
                </div>
            </TableData>
            <TableData className="hidden md:table-cell px-2">
                <div>
                    <span className="text-gray-500 text-sm font-medium ">{data.phone}</span>
                </div>
            </TableData>
            <TableData className="hidden md:table-cell px-2">
                <div>
                    <span className="text-gray-500 text-sm font-medium ">{data.NID}</span>
                </div>
            </TableData>

            <TableData className="hidden font-public-sans md:table-cell px-2">
                <div className=" py-4">
                    <Switch
                        onChange={handleToggle}
                        checked={isAvailable}
                        onColor="#10B981"
                        offColor="#EF4444"
                        onHandleColor="#FFFFFF"
                        offHandleColor="#FFFFFF"
                        handleDiameter={18}
                        uncheckedIcon={
                            <div className="flex items-center justify-center h-full text-white text-xs pr-4 ">
                                Decline
                            </div>
                        }
                        checkedIcon={
                            <div className="flex items-center justify-center h-full text-white text-xs pl-4">
                                Accept
                            </div>
                        }
                        className="react-switch"
                        width={80} // Adjust the width as needed
                    />
                </div>
            </TableData>
        </tr>
    );
}

VolunteerRow.propTypes = {
    data: PropTypes.object,
    selectRow: PropTypes.func,
    selectedData: PropTypes.array,
};
