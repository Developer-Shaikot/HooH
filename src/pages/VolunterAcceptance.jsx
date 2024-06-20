import { useEffect, useState } from "react";

import Table from "../components/table/Table";
import VolunteerRow from "../components/table/rows/VolunteerRow";
import { useGetAllApplicantQuery } from "../feature/apply/applySlice";

const tableLabels = [
	{ checkbox: true, title: "Guide ID", sort: false, revealOnResponsive: true },
	{ title: "Name", sort: false },
	{ title: "Email", sort: false },
	{ title: "NID", sort: false },
	{ title: "Status", sort: false },
];

function VolunterAcceptance() {
	const { data: applicantData, isLoading } = useGetAllApplicantQuery();
	const [select, setSelect] = useState([]);
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		setTableData(() =>
			applicantData?.data.map((data) => ({
				volunteer: {
					_id: data._id,
					visibleCheckbox: true,
				},
				name: data.name,
				nidNumber: data.nidNumber,
				email: data.email,
				status: data.accountStatus,
			}))
		);
	}, [applicantData, isLoading]);

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
			setSelect(tableData.map((data) => data.volunteer?._id));
		} else resetSelection();
	};
	return (
		<section>
			<div className="flex justify-center py-5">
				<h1 className="font-bold text-3xl">Guide applications table</h1>
			</div>
			<section className="pt-5 px-6 pb-6">
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
