import PropTypes from "prop-types";
import TableData from "../td/TableData";
import OptionedTd from "../OptionedTd";
import { useState } from "react";
import ShowMoreData from "../td/ShowMoreData";
import ExpandItem from "../td/ExpandItem";
import ProductTd from "../td/ProductTd";
import Switch from "react-switch";

export default function SuppliersRow({ selectRow, selectedData, data }) {
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
                <ProductTd
                    data={data.product}
                    selectRow={selectRow}
                    selectedData={selectedData}
                    icon={false}
                />

                <ShowMoreData showMore={showMore} toggleMore={toggleMore}>
                    <ExpandItem heading="contactPerson">{data.contactPerson}</ExpandItem>
                    <ExpandItem heading="phone">{data.phone}</ExpandItem>
                    <ExpandItem heading="location">{data.location}</ExpandItem>

                    <ExpandItem heading="onBoardDate">{data.onBoardDate}</ExpandItem>
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
            <TableData className="hidden font-public-sans text-neutral-800 text-sm font-medium md:table-cell px-5">
                {data.location}
            </TableData>

            <TableData className="hidden font-public-sans text-neutral-800 text-sm font-medium md:table-cell px-8">
                {data.onBoardDate}
            </TableData>

            <TableData className="hidden font-public-sans md:table-cell px-2">
                <div className="px-4 py-4">
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
                                Deactive
                            </div>
                        }
                        checkedIcon={
                            <div className="flex items-center justify-center h-full text-white text-xs pl-4">
                                Active
                            </div>
                        }
                        className="react-switch"
                        width={80} // Adjust the width as needed
                    />
                </div>
            </TableData>

            <TableData className="text-nowrap cursor-pointer">
                <div className="flex-col py-3 md:flex gap-2">
                    <div className="flex items-center pb-2 gap-1">
                        <OptionedTd data={{ src: "/icons/fi-sr-pencil.svg" }} />
                        <span className="font-public-sans hidden md:table-cell text-sm">Edit</span>
                    </div>
                    <div className="flex font-public-sans items-center gap-1">
                        <OptionedTd data={{ src: "/icons/fi-sr-trash.svg" }} />
                        <span className="hidden font-public-sans md:table-cell text-sm">
                            Delete
                        </span>
                    </div>
                </div>
            </TableData>
        </tr>
    );
}

SuppliersRow.propTypes = {
    data: PropTypes.object,
    selectRow: PropTypes.func,
    selectedData: PropTypes.array,
};
