import PropTypes from "prop-types";

export default function TableHeader({
    selectAll = () => false,
    dataSet,
    selectedData = [],
    tableLabels,
    sortDataAsDescending,
    fullBorder,
}) {
    return (
        <thead>
            <tr className="bg-[#f2f4f7] dark:bg-dark-theme-primary">
                {tableLabels.map(
                    (
                        {
                            title,
                            width,
                            checkbox,
                            sort,
                            type,
                            revealOnResponsive,
                            floatRight,
                            nowrap,
                        },
                        index
                    ) => (
                        <th
                            key={index}
                            className={`p-3 text-neutral-600 py-4 text-sm font-medium dark:text-slate-300 leading-none border-gray-200 dark:border-slate-700 
 ${width ? width : "w-full md:w-auto"} ${fullBorder ? "border" : "border-b"} ${
                                !revealOnResponsive ? "hidden md:table-cell" : "table-cell"
                            } border-r`}
                        >
                            <span
                                className={`inline-flex gap-1 items-center ${
                                    floatRight ? "float-right md:float-left" : "float-left"
                                } ${nowrap ? "whitespace-nowrap" : "whitespace-normal"}`}
                            >
                                {checkbox && (
                                    <input
                                        type="checkbox"
                                        checked={selectedData.length === dataSet}
                                        onChange={selectAll}
                                        className={`form-checkbox text-indigo-600 w-5 h-5 mx-1.5 rounded-md cursor-pointer accent-default-theme`}
                                    />
                                )}
                                {title}
                                {sort && (
                                    <div
                                        className="cursor-pointer pointer-events-auto"
                                        onClick={() => sortDataAsDescending(type)}
                                    >
                                        <img
                                            draggable={false}
                                            className="dark:invert dark:brightness-75"
                                            src="/icons/arrow-down-w.svg"
                                            alt="sort"
                                        />
                                    </div>
                                )}
                            </span>
                        </th>
                    )
                )}
            </tr>
        </thead>
    );
}

TableHeader.propTypes = {
    sortDataAsDescending: PropTypes.func,
    selectAll: PropTypes.func,
    dataSet: PropTypes.number,
    selectedData: PropTypes.array,
    fullBorder: PropTypes.bool,
    tableLabels: PropTypes.array.isRequired,
};
