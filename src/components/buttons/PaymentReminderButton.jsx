export default function PaymentReminderButton() {
	return (
		<button
			onClick={() => alert("Do your payment!")}
			className={`bg-default-theme-200 select-none text-white h-9 text-[14px] rounded-lg border border-gray-300 dark:border-slate-700 px-[14px] whitespace-nowrap float-right`}
		>
			<span className="font-inter">
				<span className="hidden lg:inline">Send Payment</span> Reminder
			</span>
		</button>
	);
}
