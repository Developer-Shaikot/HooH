export default function Events({ data }) {
    return (
        <section>
            <article className="shadow-md border  hover:shadow-lg cursor-pointer rounded-lg flex flex-col gap-5">
                <div>
                    <img
                        src={data.image}
                        alt={data.name}
                        className="w-full h-[240px] sm:h-[350px]"
                    />
                </div>
                <div className="py-8 px-2">
                    <h1 className="font-semibold text-2xl text-primary mx-2 mt-1">{data.title}</h1>
                    <div>
                        <div className="flex justify-between mx-1 py-2">
                            <div className=" text-black text-3xl font-medium">${data.price}</div>
                            <div className="mt-2 mx-2 flex gap-2">
                                <span className="mt-1">
                                    <img src="/icons/watchIcon.svg" alt="watchIcon.svg" />
                                </span>
                                <span className="text-red-700"> {data.time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
