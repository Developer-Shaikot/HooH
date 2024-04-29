import { transportationData } from "../../../constant";
import TransportationCard from "../cards/TransportationCard";

export default function PlaceInformation() {
	return (
		<div className="col-span-3 rounded-xl">
			<h1 className="font-semibold text-[26px] text-black-50">
				The places you can Visit in Dhaka
			</h1>
			<div className="grid grid-cols-2 gap-2 mt-3">
				<div>
					<img src="/images/dhaka-3.png" alt="" />
				</div>
				<div>
					<img src="/images/dhaka-4.png" alt="" />
				</div>
			</div>
			<div className="grid grid-cols-3 gap-2 mt-2">
				<div>
					<img src="/images/dhaka-6.png" alt="" />
				</div>
				<div>
					<img src="/images/dhaka-2.png" alt="" />
				</div>
				<div>
					<img src="/images/dhaka-5.png" alt="" />
				</div>
			</div>
			<hr className="mt-4" />
			{/* -------------- transportation --------------- */}
			<div className="mt-2">
				<h1 className="font-semibold mb-3 text-[26px] text-black-50">Transportation</h1>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
					{transportationData.map((data) => (
						<TransportationCard key={data.id} data={data} />
					))}
				</div>
			</div>
		</div>
	);
}
