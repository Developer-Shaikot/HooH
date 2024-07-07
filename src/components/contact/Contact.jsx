const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116814.54860242897!2d90.30539351712466!3d23.802426885315903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ada2664e21%3A0x3c872fd17bc11ddb!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1720253603117!5m2!1sen!2sbd" width="600" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

const Contact = () => {
    return (
        <div className="py-8">
            <div className="grid grid-cols-1 xl:grid-cols-2  gap-12">
                <div className="">
                    <h2 className="text-2xl font-semibold mb-5">Google Location</h2>
                    <div dangerouslySetInnerHTML={{ __html: iframe }} />
                </div>

                <div className="mt-6 md:mt-0 pr-32 xl:pr-16">
                    <h2 className="text-2xl font-semibold mb-5">Have any plan in mind?</h2>
                    <form>
                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-2 border border-[#006D5A] rounded"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-2 border border-[#006D5A] rounded"
                            />
                        </div>
                        <div className="mb-5">
                            <textarea
                                placeholder="Your Message.."
                                className="w-full p-2 border border-[#006D5A] rounded"
                                rows="16"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-3/2 px-5 py-2 bg-[#006D5A] text-white rounded hover:bg-[#006D5A6B]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
