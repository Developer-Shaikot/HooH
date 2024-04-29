import ReactStars from "react-rating-stars-component";

export default function Volunteer({ data, selected, handleSelect }) {
	return (
		<article
			onClick={() => handleSelect(data.id)}
			className={`${
				selected === data.id ? "border-t-primary" : "border-t-slate-100"
			} shadow-md border border-t-[10px] hover:shadow-lg cursor-pointer rounded-lg p-4 flex flex-col items-center`}
		>
			<div>
				<img
					src={data.image}
					alt={data.name}
					className="w-20 h-20 border-2 border-primary rounded-full"
				/>
			</div>
			<h1 className="font-semibold text-[18px] text-primary mt-1">{data.name}</h1>
			<p className="text-center text-sm">{data.description}</p>
			<div>
				<ReactStars
					count={5}
					onChange={() => {}}
					value={Number(data.rating)}
					edit={false}
					isHalf={true}
					size={24}
					activeColor="#ffd700"
				/>
			</div>
		</article>
	);
}
