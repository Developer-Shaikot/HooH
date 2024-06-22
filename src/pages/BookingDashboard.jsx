import { useEffect, useState } from "react";

import BookingRow from "../components/table/rows/BookingRow";
import Table from "../components/table/Table";
import { useGetAllBookingQuery } from "../feature/booking/bookingSlice";

const tableLabels = [
	{ checkbox: true, title: "TrnxID", sort: false, revealOnResponsive: true },
	{ title: "Name", sort: false },
	{ title: "Guide", sort: false },
	{ title: "Mobile", sort: false },
	{ title: "Location", sort: false },
	{ title: "Date", sort: false },
	{ title: "Paid", sort: false },
	{ title: "Status", sort: false },
];

function BookingDashboard() {
	const [select, setSelect] = useState([]);
	const { data: bookingData, isLoading } = useGetAllBookingQuery();
	const [tableData, setTableData] = useState([]);

	console.log(bookingData);

	useEffect(() => {
		setTableData(() =>
			bookingData?.data.map((data) => ({
				product: {
					_id: data._id,
					txId: data.transactionId,
					visibleCheckbox: true,
				},
				name: data.bookingBy?.name || data.guide?.name,
				selectedGuide: data.guide?.name,
				mobile: data.mobile,
				location: data.package?.place,
				date: Date(data.date)?.toLocaleString().split("(")[0],
				paid: data.budget,
				status: data.status,
			}))
		);
	}, [bookingData, isLoading]);

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
			setSelect(tableData.map((data) => data.product._id));
		} else resetSelection();
	};
	return (
		<section>
			<div className="flex justify-center py-5">
				<h1 className="font-bold text-3xl">Booking Table</h1>
			</div>
			<section className="pt-5 px-6 pb-6">
				{!isLoading ? (
					<Table
						selectAll={selectAll}
						selectRow={handleSelect}
						selectedData={select}
						dataSet={tableData?.length || 0}
						tableLabels={tableLabels}
						itemsPerPage={5}
						resetSelection={resetSelection}
					>
						{tableData?.map((data, index) => (
							<BookingRow
								key={index}
								data={data}
								selectedData={select}
								selectRow={handleSelect}
							/>
						))}
					</Table>
				) : (
					<p>Loading...</p>
				)}
			</section>
		</section>
	);
}

export default BookingDashboard;
