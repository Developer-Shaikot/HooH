import { Link } from "react-router-dom";

export default function BookingHeading() {
	return (
		<div className="flex gap-2.5 sm:flex-row font-poppins flex-col items-center justify-between">
			<div className="sm:text-start text-center">
				<h1 className="font-semibold text-[40px] text-black-50">Welcome to Dhaka</h1>
				<p className="-mt-1.5 text-[#7E7A7A]">
					Lorem Ipsum is simply dummy text of the printing and
				</p>
			</div>
			<div className="flex">
				<Link to="/">
					<img src="/icons/link.svg" className="w-14 h-14" alt="" />
				</Link>
				<Link to="/">
					<img src="/icons/location.svg" className="w-14 h-14" alt="" />
				</Link>
				<Link to="/">
					<img src="/icons/like.svg" className="w-14 h-14" alt="" />
				</Link>
			</div>
		</div>
	);
}
