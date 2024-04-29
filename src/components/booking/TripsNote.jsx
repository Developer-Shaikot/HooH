export default function TripsNote() {
	return (
		<div className="col-span-3 border-2 font-poppins rounded-xl border-[#006D5A6B]">
			<div className="bg-primary text-center justify-center border-t-0 border-l-0 rounded-tl-lg w-[130px] text-white flex gap-1.5 text-sm px-3 py-2">
				<img src="/icons/note.svg" className="w-3" />
				<span>Trip Note</span>
			</div>
			<div className="px-6 py-5">
				<ul className="text-black-50 text-[16px] list-disc list-inside [&>li]:mb-2.5">
					<li>Respect local customs and cultural norms during your tour.</li>
					<li>
						Follow safety guidelines provided by tour guides and adhere to their
						instructions.
					</li>
					<li>
						Notify HOOH promptly of any changes or cancellations to your travel plans.
					</li>
					<li>Ensure punctuality for scheduled tours and activities.</li>
					<li>
						Take responsibility for personal belongings and valuables during the tour.
					</li>
					<li>Treat fellow travelers, guides, and locals with courtesy and respect.</li>
					<li>Abide by all local laws and regulations while exploring Dhaka city.</li>
					<li>
						Notify HOOH of any medical conditions or special requirements before
						booking.
					</li>
					<li>
						Refrain from engaging in any illegal or unethical activities during the
						tour.
					</li>
					<li>
						Understand and agree to any additional terms and conditions specific to
						individual tours or activities offered through HOOH.
					</li>
				</ul>
				<div className="flex gap-2 items-center font-semibold mt-6">
					<input type="checkbox" className="accent-primary cursor-pointer" />
					<span>Agree with Terms and conditions</span>
				</div>
			</div>
		</div>
	);
}
