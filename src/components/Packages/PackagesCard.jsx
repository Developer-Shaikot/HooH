import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import IconButton from "../buttons/IconButton";

export default function PackagesCard({ data }) {
	return (
		<section>
			<article className="shadow-md border  hover:shadow-lg cursor-pointer rounded-lg p-2 flex flex-col gap-2">
				<div>
					<img
						src={data.packageAvatar}
						alt={data.name}
						className="w-full h-[240px] object-cover sm:h-[350px] rounded-t-xl"
					/>
				</div>
				<h1
					className="font-semibold text-2xl text-primary mx-2 mt-1 line-clamp-1"
					title={data.name}
				>
					{data.name}
				</h1>
				<div className="flex items-center text-[14px] font-semibold -mt-1 gap-1.5 mx-2">
					<img src="/icons/select-location.svg" className="w-2" alt="" />
					{data.place}
				</div>
				<div className="my-2">
					<p className="text-sm font-base mx-2 line-clamp-3" title={data.description}>
						{data.description}
					</p>
				</div>
				<div>
					<div className="flex justify-between mx-1">
						<ReactStars
							count={5}
							onChange={() => {}}
							value={Number(data?.rating || 4)}
							edit={false}
							isHalf={true}
							size={24}
							activeColor="#ffd700"
						/>
						<div className="mt-2 mx-2 flex gap-2">
							<span className="mt-1">
								<img src="/icons/watchIcon.svg" alt="watchIcon.svg" />
							</span>
							<span className="text-red-700"> {data.duration} day/s</span>
						</div>
					</div>
					<div className="flex justify-between mt-4 mx-1 my-2">
						<div className=" text-black text-3xl font-medium">{data.price} ৳</div>
						<Link to="/booking">
							<IconButton
								height="h-10"
								width="w-[90px]"
								bg="bg-[#006D5A]"
								color="text-white"
								text="Explore"
							/>
						</Link>
					</div>
				</div>
			</article>
		</section>
	);
}
