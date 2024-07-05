import { eventsData } from "../../../constant";
import IconButton from "../buttons/IconButton";

import Events from "./Events";

export default function Event() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 place-content-center gap-5 px-12">
            <div className="flex justify-center flex-col">
                <h1 className="text-4xl">Upcoming Events</h1>
                <p className="text-xl pt-5 w-56">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the standard dummy text ever since the 1500s,
                </p>
                <div className="mt-6">
                    <IconButton
                        height="h-10"
                        width="w-[150px]"
                        bg="bg-primary"
                        color="text-white"
                        text="View All Events"
                    />
                </div>
            </div>

            {eventsData.map((data) => (
                <div key={data.id}>
                    <Events data={data} />
                </div>
            ))}
        </div>
    );
}
