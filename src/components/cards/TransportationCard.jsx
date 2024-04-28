export default function TransportationCard({ data }) {
	return (
		<article className="shadow-lg rounded-lg p-4 border">
			<h1 className="text-[18px] font-bold text-black-50">{data.heading}</h1>
			<div className="mt-2">
				<p className="text-sm text-black-50">
					<img src={data.image} className="float-right" alt="" />
					{data.description}
				</p>
			</div>
			<div className="flex gap-2 text-[16px] text-primary mt-3">
				<img src="/icons/traveler.svg" className="w-3 green-image" alt="" />
				<span>Volunteer assistance</span>
			</div>
		</article>
	);
}
