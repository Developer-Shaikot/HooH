const ReviewCarouselCard = () => {
    return (
        <div className="p-4 m-3 lg:m-4 rounded-lg bg-white shadow-xl max-w-md mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <div className="my-4 flex justify-center">
                <img
                    src="/icons/semiclone.svg"
                    alt="Quote Icon"
                    className="w-6 h-6 md:w-8 md:h-8"
                />
            </div>
            <div className="text-gray-600 text-sm md:text-base lg:text-lg">
                <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
            </div>
            <div className="mt-4 flex items-center">
                <img
                    src="/images/Ellipse 20.png"
                    alt="Jack Donson"
                    className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                    <p className="font-bold text-sm md:text-base lg:text-lg">Jack Donson</p>
                    <p className="text-xs md:text-sm text-gray-600">Software Engineer</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCarouselCard;
