export default function Events({ data }) {
    return (
        <section className="flex flex-col items-center justify-center py-5">
            <article className="shadow-md border hover:shadow-lg cursor-pointer rounded-lg flex flex-col gap-5 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                <div>
                    <img src={data.image} alt={data.name} className="w-96 h-full rounded-t-lg" />
                </div>
                <div className="py-8 px-2">
                    <h1 className="font-semibold text-xl text-primary mx-2 mt-1">{data.title}</h1>
                    <div>
                        <div className="flex justify-between mx-1 py-2">
                            <div className="text-black text-3xl font-medium">${data.price}</div>
                            <div className="mt-2 mx-2 flex gap-2 items-center">
                                <img
                                    src="/icons/watchIcon.svg"
                                    alt="watchIcon.svg"
                                    className="w-6 h-6"
                                />
                                <span className="text-red-700">{data.time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
