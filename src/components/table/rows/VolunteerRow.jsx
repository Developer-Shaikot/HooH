import PropTypes from "prop-types";
import TableData from "../td/TableData";
import { useState } from "react";
import ShowMoreData from "../td/ShowMoreData";
import ExpandItem from "../td/ExpandItem";
import VolunteerTd from "../td/VolunteerTd";
import Switch from "react-switch";
import { useAcceptGuideMutation, useDeclineGuideMutation } from "../../../feature/apply/applySlice";
import { toast } from "sonner";

export default function VolunteerRow({ selectRow, selectedData, data }) {
	const [showMore, setShowMore] = useState(false);
	const [isAvailable, setIsAvailable] = useState(data.status === "accepted");
	const [accept] = useAcceptGuideMutation();
	const [reject] = useDeclineGuideMutation();

	const toggleMore = () => setShowMore(!showMore);

	const handleToggle = () => {
		if (isAvailable) {
			reject(data.volunteer?._id)
				.unwrap()
				.then((res) => {
					if (res.success) {
						setIsAvailable(!isAvailable);
						toast.success("Guide's application declined");
					}
				})
				.catch((err) => console.error(err));
		} else {
			accept(data.volunteer?._id)
				.unwrap()
				.then((res) => {
					if (res.success) {
						setIsAvailable(!isAvailable);
						toast.success("Guide's application accepted");
					}
				})
				.catch((err) => console.error(err));
		}
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
					<ExpandItem heading="Name">{data.name}</ExpandItem>
					<ExpandItem heading="Email">{data.email}</ExpandItem>
					<ExpandItem heading="NID">{data.nidNumber}</ExpandItem>
				</ShowMoreData>
			</TableData>
			<TableData className="hidden md:table-cell">
				<div>
					<span className="text-neutral-800 text-sm font-semibold">{data.name}</span>
				</div>
			</TableData>
			<TableData className="hidden md:table-cell px-2">
				<div>
					<span className="text-gray-500 text-sm font-medium ">{data.email}</span>
				</div>
			</TableData>
			<TableData className="hidden md:table-cell px-2">
				<div>
					<span className="text-gray-500 text-sm font-medium ">{data.nidNumber}</span>
				</div>
			</TableData>

			<TableData className="hidden font-public-sans md:table-cell px-2">
				<div className="py-4">
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
								Declined
							</div>
						}
						checkedIcon={
							<div className="flex items-center justify-center h-full text-white text-xs pl-4">
								Accepted
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
