import ReviewSwiper from "./ReviewSwiper";

const Review = () => {
    return (
        <div className="bg-white p-8 rounded-lg grid  grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
                <h2 className="text-3xl font-bold mb-4">Review</h2>
                <p className="text-gray-600 mb-6">What Client Says</p>
                <p className="text-gray-600 mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry`&apos;s standard dummy text ever since the 1500s,
                </p>
                <button className="bg-[#006D5A] text-white px-4 py-2 rounded hover:bg-[#006D5A] transition duration-300">
                    View Reviews
                </button>
            </div>
            <div>
                <ReviewSwiper />
            </div>
        </div>
    );
};

export default Review;
