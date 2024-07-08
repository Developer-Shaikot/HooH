const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#006D5A] text-white">
            <div className="py-8">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="flex items-center flex-col w-full sm:w-1/4 mb-4 sm:mb-0">
                        <h2 className="font-bold mb-2">Pages</h2>
                        <a
                            href="https://theplanetd.com/"
                            target="_blank"
                            className="mb-1 underline"
                        >
                            The Planet
                        </a>
                        <a
                            href="https://www.theblondeabroad.com/"
                            target="_blank"
                            className="mb-1 underline"
                        >
                            The Blonde Abroad
                        </a>
                        <a
                            href="https://www.nomadicmatt.com/"
                            target="_blank"
                            className="mb-1 underline"
                        >
                            Nomadic Matt
                        </a>
                        <a
                            href="https://www.thebrokebackpacker.com/"
                            target="_blank"
                            className="mb-1 underline"
                        >
                            The Broke Backpacker
                        </a>
                    </div>
                    <div className="flex items-center flex-col w-full sm:w-1/4 mb-4 sm:mb-0">
                        <h2 className="font-bold mb-2">Useful Links</h2>
                        <a
                            href="https://www.oneikathetraveller.com/"
                            target="_blank"
                            className="mb-1 underline"
                        >
                            Oneika Traveller
                        </a>
                        <a
                            href="https://www.alongdustyroads.com/"
                            target="_blank"
                            className="mb-1 underline"
                        >
                            Along Dusty Road
                        </a>
                        <a
                            href="https://expertvagabond.com/"
                            target="_blank"
                            className="mb-1 underline"
                        >
                            Expert Vagabond
                        </a>
                        <a
                            href="https://www.bemytravelmuse.com/"
                            target="_blank"
                            className="mb-1 underline"
                        >
                            Be My Travel
                        </a>
                    </div>
                    <div className="flex items-center flex-col w-full sm:w-1/4 mb-4 sm:mb-0">
                        <h2 className="font-bold mb-2">Contacts</h2>
                        <a href="tel:+8801833440993" className="mb-1 underline">
                            +8801833440993
                        </a>
                        <a href="tel:+8801920012744" className="mb-1 underline">
                            +8801920012744
                        </a>
                        <a href="tel:+8801308673831" className="mb-1 underline">
                            +8801308673831
                        </a>
                        <a href="tel:+8801604326337" className="mb-1 underline">
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
