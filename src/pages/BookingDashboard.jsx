import { useState } from "react";

import BookingRow from "../components/table/rows/BookingRow";
import Table from "../components/table/Table";

const tableLabels = [
    { checkbox: true, title: "User Name", sort: false, revealOnResponsive: true },
    { title: "Contact Person", sort: false },
    { title: "Phone Number", sort: false },
    { title: "Location", sort: false },
    { title: "Date", sort: false },
    { title: "Status", sort: false },
    { title: "Action", sort: false, revealOnResponsive: true, floatRight: true },
];

const tableData = [
    {
        product: {
            id: "#5657",
            image: "/images/bus.png",
            title: "Sleek Wireless Headphones",
            visibleCheckbox: true,
        },
        contactPerson: "Ayon",
        phone: "+8801783456647",
        location: "Dhaka, Bangladesh",
        onBoardDate: "Jan 29, 2024 18:15 PM",
        status: true,
    },
    {
        product: {
            id: "#5658",
            image: "/images/bus.png",
            title: "Mechanical Gaming Keyboard",
            visibleCheckbox: true,
        },
        contactPerson: "John Doe",
        phone: "+8801783456648",
        location: "Chittagong, Bangladesh",
        onBoardDate: "Feb 01, 2024 10:00 AM",
        status: true,
    },
    {
        product: {
            id: "#5659",
            image: "/images/bus.png",
            title: "Ergonomic Wireless Mouse",
            visibleCheckbox: true,
        },
        contactPerson: "Jane Smith",
        phone: "+8801783456649",
        location: "Sylhet, Bangladesh",
        onBoardDate: "Feb 02, 2024 12:30 PM",
        status: false,
    },
    {
        product: {
            id: "#5660",
            image: "/images/bus.png",
            title: "Ultra HD Monitor",
            visibleCheckbox: true,
        },
        contactPerson: "Emily Davis",
        phone: "+8801783456650",
        location: "Rajshahi, Bangladesh",
        onBoardDate: "Feb 03, 2024 09:45 AM",
        status: true,
    },
    {
        product: {
            id: "#5661",
            image: "/images/bus.png",
            title: "Bluetooth Speaker",
            visibleCheckbox: true,
        },
        contactPerson: "Michael Brown",
        phone: "+8801783456651",
        location: "Khulna, Bangladesh",
        onBoardDate: "Feb 04, 2024 02:15 PM",
        status: false,
    },
    {
        product: {
            id: "#5662",
            image: "/images/bus.png",
            title: "Gaming Laptop",
            visibleCheckbox: true,
        },
        contactPerson: "Sarah Wilson",
        phone: "+8801783456652",
        location: "Barisal, Bangladesh",
        onBoardDate: "Feb 05, 2024 11:00 AM",
        status: true,
    },
    {
        product: {
            id: "#5663",
            image: "/images/bus.png",
            title: "Android Tablet",
            visibleCheckbox: true,
        },
        contactPerson: "Chris Evans",
        phone: "+8801783456653",
        location: "Rangpur, Bangladesh",
        onBoardDate: "Feb 06, 2024 04:30 PM",
        status: false,
    },
    {
        product: {
            id: "#5664",
            image: "/images/bus.png",
            title: "Digital Camera",
            visibleCheckbox: true,
        },
        contactPerson: "Robert Martin",
        phone: "+8801783456654",
        location: "Mymensingh, Bangladesh",
        onBoardDate: "Feb 07, 2024 08:00 AM",
        status: true,
    },
    {
        product: {
            id: "#5665",
            image: "/images/bus.png",
            title: "Wireless Printer",
            visibleCheckbox: true,
        },
        contactPerson: "Laura Lee",
        phone: "+8801783456655",
        location: "Comilla, Bangladesh",
        onBoardDate: "Feb 08, 2024 03:00 PM",
        status: false,
    },
    {
        product: {
            id: "#5666",
            image: "/images/bus.png",
            title: "Smartwatch",
            visibleCheckbox: true,
        },
        contactPerson: "David Clark",
        phone: "+8801783456656",
        location: "Narayanganj, Bangladesh",
        onBoardDate: "Feb 09, 2024 07:45 AM",
        status: true,
    },
    {
        product: {
            id: "#5667",
            image: "/images/bus.png",
            title: "Camera Drone",
            visibleCheckbox: true,
        },
        contactPerson: "Sophia Turner",
        phone: "+8801783456657",
        location: "Gazipur, Bangladesh",
        onBoardDate: "Feb 10, 2024 01:30 PM",
        status: false,
    },
];

function BookingDashboard() {
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
            setSelect(tableData.map((data) => data.product.id));
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
                        <BookingRow
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

export default BookingDashboard;
