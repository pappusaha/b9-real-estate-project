import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen bg-cover bg-center flex items-center"
                    style={{
                        backgroundImage: "url('/Image/img.jpg')",
                    }}
                >
                    <div className="text-center mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
                            Discover Your Dream Home
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl text-gray-200">
                            Your trusted partner in real estate to find the best property.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            Explore Properties
                        </button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen bg-cover bg-center flex items-center"
                    style={{
                        backgroundImage: "url('/Image/img2.jpg')",
                    }}
                >
                    <div className="text-center mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
                            Find Luxury Apartments
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl text-gray-200">
                            Experience top-tier living with modern amenities.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen bg-cover bg-center flex items-center"
                    style={{
                        backgroundImage: "url('/Image/img3.jpg')",
                    }}
                >
                    <div className="text-center mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
                            Premium Real Estate Services
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl text-gray-200">
                            Trusted by thousands of happy clients.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            View Listings
                        </button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen bg-cover bg-center flex items-center"
                    style={{
                        backgroundImage: "url('/Image/img4.jpg')",
                    }}
                >
                    <div className="text-center mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
                            Modern Homes for Sale
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl text-gray-200">
                            Stylish, functional, and built to last.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 5 */}
            <div id="slide5" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen bg-cover bg-center flex items-center"
                    style={{
                        backgroundImage: "url('/Image/img5.jpg')",
                    }}
                >
                    <div className="text-center mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
                            Your Real Estate Journey Begins Here
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl text-gray-200">
                            Let us help you find your perfect property.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 6 */}
            <div id="slide6" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen bg-cover bg-center flex items-center"
                    style={{
                        backgroundImage: "url('/Image/img6.jpg')",
                    }}
                >
                    <div className="text-center mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
                            Real Estate Solutions Tailored for You
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl text-gray-200">
                            Bringing you closer to your dream property.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
