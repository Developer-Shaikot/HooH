import OutsideClickHandler from "react-outside-click-handler";
import PropTypes from "prop-types";
import SingleNotification from "./SingleNotification";

export default function Notification({ closeNotificationPopup }) {
	return (
		<OutsideClickHandler onOutsideClick={closeNotificationPopup}>
			<div className="fixed top-16 right-3 sm:right-20 w-[330px] sm:w-[440px] h-[506px] bg-white rounded-2xl shadow-lg border border-gray-200 z-30">
				<div className="flex justify-between items-center p-5">
					<div className="text-gray-900 text-xl font-inter font-medium leading-normal">
						Notification
					</div>
					<div className="w-6 h-6 flex-col justify-center items-center inline-flex">
						<div className="cursor-pointer" onClick={closeNotificationPopup}>
							<img src="/icons/close-black.svg" alt="close" />
						</div>
					</div>
				</div>
				<div className="h-px bg-gray-200" />
				<div className="h-[390px] overflow-y-auto">
					<SingleNotification />
					<SingleNotification unread={true} />
					<SingleNotification unread={true} />
					<SingleNotification />
					<SingleNotification />
					<SingleNotification />
					<SingleNotification />
				</div>
				<div className="flex items-center gap-2 px-6 py-3">
					<input
						className="accent-white cursor-pointer"
						type="checkbox"
						name="mark-all"
						id="mark-all"
					/>
					<label
						htmlFor="mark-all"
						className="text-violet-900 select-none text-sm font-inter cursor-pointer font-semibold leading-[18px]"
					>
						Mark all as read
					</label>
				</div>
			</div>
		</OutsideClickHandler>
	);
}

Notification.propTypes = {
	closeNotificationPopup: PropTypes.func,
};
