import React from 'react';
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-700 text-white py-8 transition-all duration-500 ease-in-out">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                    {/* Links Section */}
                    <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-6">
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">BLOG</a>
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">NEWSLETTER</a>
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">VIDEOS</a>
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">GALLERY</a>
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">HANDED OVER PROJECTS</a>
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">REVIEWS</a>
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">REAL ESTATE UPDATE</a>
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">CAREER</a>
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">FEEDBACK</a>
                        <a href="#" className="hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">PRIVACY</a>
                    </div>

                    {/* Social Icons */}
                    <div className="w-full lg:w-auto flex justify-center lg:justify-end gap-6 mt-4 lg:mt-0">
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-yellow-400 transform transition duration-300 ease-in-out hover:scale-110">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-lg font-semibold">bti Celebration Point, Plot: 3 & 5, Road: 113/A, Gulshan-2, Dhaka-1212</p>
                    <p className="text-sm mt-2">bti - Building Technology & Ideas Ltd. © 1984-2024</p>
                </div>

                {/* Contact Icons */}
                <div className="fixed bottom-6 right-6 flex flex-col gap-3">
                    <a href="tel:16604" className="bg-black text-white rounded-full p-4 hover:bg-gray-700 transform transition duration-300 ease-in-out hover:scale-110">
                        <i className="fas fa-phone"></i>
                    </a>
                    <a href="#" className="bg-green-500 text-white rounded-full p-4 hover:bg-green-600 transform transition duration-300 ease-in-out hover:scale-110">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
