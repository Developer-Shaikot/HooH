import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader"; // Adjust the import path as necessary

function Table({
    selectAll = undefined,
    selectedData = [],
    dataSet = 0,
    tableLabels = [],
    sortDataAsDescending = undefined,
    children,
    resetSelection,
    itemsPerPage = 5, // Default to 5 items per page
}) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(dataSet / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Optionally, reset the selection when changing pages
        resetSelection();
    };

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, dataSet); // Ensure endIndex does not exceed dataSet length

    // Filter the children based on the current page
    const childrenForCurrentPage = React.Children.toArray(children).slice(startIndex, endIndex);

    // Calculate the range of items for the current page
    const startItem = startIndex + 1;
    const endItem = endIndex;

    return (
        <div className={`rounded-lg border border-gray-300 overflow-x-auto`}>
            <table className="w-full font-public-sans text-left border-collapse">
                {tableLabels.length !== 0 && (
                    <TableHeader
                        selectAll={selectAll}
                        selectedData={selectedData}
                        tableLabels={tableLabels}
                        dataSet={dataSet}
                        sortDataAsDescending={sortDataAsDescending}
                    />
                )}
                <tbody>{childrenForCurrentPage}</tbody>
            </table>
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
                <div className="flex-start text-gray-500 text-sm font-medium">
                    Showing {startItem}-{endItem} from {dataSet}
                    {selectedData.length > 0 && (
                        <div className="py-2">
                            <p className="text-gray-500  font-public-sans font-semibold flex leading-none">
                                {selectedData.length} of {dataSet}
                                <span className="text-gray-400 ml-2 font-public-sans font-medium leading-none">
                                    Orders Selected
                                </span>
                            </p>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-4 py-4 md:py-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="cursor-pointer"
                    >
                        <img src="/icons/Primary Icon Button prev.svg" alt="previous" />
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3.5 py-1 rounded ${
                                    currentPage === page
                                        ? "bg-default-theme text-white text-sm font-semibold"
                                        : "bg-gray-200 text-gray-700 text-sm font-semibold"
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="cursor-pointer"
                    >
                        <img src="/icons/Primary Icon next.svg" alt="next" />
                    </button>
                </div>
            </div>
        </div>
    );
}

Table.propTypes = {
    sortDataAsDescending: PropTypes.func,
    selectAll: PropTypes.func,
    selectedData: PropTypes.array,
    fullBorder: PropTypes.bool,
    dataSet: PropTypes.number,
    tableLabels: PropTypes.array,
    children: PropTypes.node,
    resetSelection: PropTypes.func.isRequired,
    itemsPerPage: PropTypes.number,
};

export default Table;
