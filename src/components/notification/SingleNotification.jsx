import PropTypes from "prop-types";

export default function SingleNotification({ unread }) {
	return (
		<div
			className={`flex gap-4 items-center ${
				unread ? "bg-[#f0f2f5]" : "bg-white"
			} select-none cursor-pointer justify-between px-5 py-4 border-b border-gray-200`}
		>
			<div className="relative">
				<img
					className="min-w-[32px] h-[32px] rounded-full"
					src="https://mui.com/static/images/avatar/2.jpg"
					alt="profile-picture"
				/>
				{unread && <div className="h-2.5 w-2.5 bg-[#2984FE] rounded-full absolute top-0 right-0 border-2 border-white"></div>}
			</div>
			<div>
				<span className="text-slate-700 text-sm font-inter font-medium leading-tight">
					Demo - Coupon Simple Website&nbsp;
				</span>
				<span className="text-slate-700 text-sm font-inter font-normal leading-tight">
					No unbilled charges found for this subscription.
				</span>
			</div>
			<div>
				<div className="text-gray-400 text-sm font-inter font-medium whitespace-nowrap leading-none">
					5 min
				</div>
			</div>
		</div>
	);
}

SingleNotification.propTypes = {
	unread: PropTypes.bool,
};
