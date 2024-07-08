const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#006D5A] text-white">
            <div className="py-8">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="flex items-center flex-col w-full sm:w-1/4 mb-4 sm:mb-0">
                        <h2 className="font-bold mb-2">Pages</h2>
                        <a href="#" className="mb-1">
                            First Link
                        </a>
                        <a href="#" className="mb-1">
                            Second Link
                        </a>
                        <a href="#" className="mb-1">
                            Third Link
                        </a>
                        <a href="#" className="mb-1">
                            Fourth Link
                        </a>
                    </div>
                    <div className="flex items-center flex-col w-full sm:w-1/4 mb-4 sm:mb-0">
                        <h2 className="font-bold mb-2">Useful Links</h2>
                        <a href="#" className="mb-1">
                            First Link
                        </a>
                        <a href="#" className="mb-1">
                            Second Link
                        </a>
                        <a href="#" className="mb-1">
                            Third Link
                        </a>
                        <a href="#" className="mb-1">
                            Fourth Link
                        </a>
                    </div>
                    <div className="flex items-center flex-col w-full sm:w-1/4 mb-4 sm:mb-0">
                        <h2 className="font-bold mb-2">Contacts</h2>
                        <a href="#" className="mb-1 underline">
                            +8801833440993
                        </a>
                        <a href="#" className="mb-1 underline">
                            +8801920012744
                        </a>
                        <a href="#" className="mb-1 underline">
                            +8801308673831
                        </a>
                        <a href="#" className="mb-1 underline">
                            +8801604326337
                        </a>
                    </div>
                    <div className="flex flex-col items-center w-full sm:w-1/4">
                        <img src="/images/hooh.png" alt="HooH!!" className="mb-2" />{" "}
                        {/* Replace with the actual logo */}
                        <p className="text-center px-8">
                            A Tourism App for all who wants tour by own choice
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#000] px-12 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <p>© {currentYear} HOOH! — @hooh!</p>
                    <div className="flex space-x-4">
                        <a href="#">
                            <img src="/images/linkedIn168.svg" alt="LinkedIn" className="w-6 h-6" />
                        </a>{" "}
                        {/* Replace with actual icon paths */}
                        <a href="#">
                            <img src="/images/Facebook.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#">
                            <img src="/images/YOutube.svg" alt="YouTube" className="w-6 h-6" />
                        </a>
                        <a href="#">
                            <img src="/images/Instagarm.svg" alt="Instagram" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
