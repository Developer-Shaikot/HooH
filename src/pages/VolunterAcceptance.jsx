import { useState } from "react";

import Table from "../components/table/Table";
import VolunteerRow from "../components/table/rows/VolunteerRow";

const tableLabels = [
    { checkbox: true, title: "Volunteer Name", sort: false, revealOnResponsive: true },
    { title: "Contact Person", sort: false },
    { title: "Phone Number", sort: false },
    { title: "NID", sort: false },
    { title: "Status", sort: false },
];

const tableData = [
    {
        volunteer: {
            id: "#5657",
            image: "/icons/volunteer.svg",
            Name: "Jhon Doe",
            visibleCheckbox: true,
        },
        contactPerson: "Ayon",
        NID: "5385430909237",
        phone: "+8801783456647",
        status: true,
    },
];

function VolunterAcceptance() {
    const [select, setSelect] = useState([]);

    const resetSelection = () => {
        setSelect([]);
    };

    const handleSelect = (item, e) => {
        if (e.target.checked) {
            setSelect([...select, item]);
        } else setSelect(select.filter((data) => item !== data));
    };

    const selectAll = (e) => {
        if (e.target.checked) {
            setSelect(tableData.map((data) => data.volunteer.id));
        } else resetSelection();
    };
    return (
        <section>
            <div className="flex justify-center py-5">
                <h1 className="font-bold text-3xl">Booking Table</h1>
            </div>
            <section className="pt-5 px-6 pb-6">
                <Table
                    selectAll={selectAll}
                    selectRow={handleSelect}
                    selectedData={select}
                    dataSet={tableData.length || 0}
                    tableLabels={tableLabels}
                    itemsPerPage={5}
                    resetSelection={resetSelection}
                >
                    {tableData.map((data, index) => (
                        <VolunteerRow
                            key={index}
                            data={data}
                            selectedData={select}
                            selectRow={handleSelect}
                        />
                    ))}
                </Table>
            </section>
        </section>
    );
}

export default VolunterAcceptance;
