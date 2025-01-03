import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contacts = () => {
    return (
        <section className="bg-gradient-to-r from-pink-500 to-indigo-500 text-gray-50 py-20 px-6">
            {/* Dynamic Title */}
            <Helmet>
                <title>Real Estate | Contacts Page</title>
            </Helmet>

            <section className="text-center">
                <div className="container mx-auto space-y-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 text-violet-400 animate-bounce">
                        <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                        <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                    </svg>
                    <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-gray-300">
                        "Elevate your experience with us. Start the journey today."
                    </p>
                </div>
            </section>

            <div className="grid max-w-6xl grid-cols-1 mx-auto lg:px-8 md:grid-cols-2 md:divide-x my-12">
                <div className="py-6 md:px-8">
                    <h1 className="text-4xl font-bold text-violet-400">Get in touch</h1>
                    <p className="text-gray-300 mt-2 mb-6">Fill in the form to start a conversation.</p>
                    <div className="space-y-4 text-gray-300">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-violet-400">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Fake address, 9999 City</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-violet-400">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-violet-400">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>contact@business.com</span>
                        </p>
                    </div>
                </div>
                <form noValidate className="flex flex-col space-y-6 md:px-8">
                    <label>
                        <span className="block mb-1 text-gray-300">Full name</span>
                        <input type="text" placeholder="Leroy Jenkins" className="w-full rounded-md bg-gray-800 text-gray-50 focus:ring focus:ring-violet-400" />
                    </label>
                    <label>
                        <span className="block mb-1 text-gray-300">Email address</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="w-full rounded-md bg-gray-800 text-gray-50 focus:ring focus:ring-violet-400" />
                    </label>
                    <label>
                        <span className="block mb-1 text-gray-300">Message</span>
                        <textarea rows="4" className="w-full rounded-md bg-gray-800 text-gray-50 focus:ring focus:ring-violet-400"></textarea>
                    </label>
                    <button type="submit" className="px-8 py-3 mx-auto text-lg font-bold rounded-md bg-violet-500 text-gray-900 hover:bg-violet-600">
                        Submit
                    </button>
                </form>
            </div>

            <div className="text-center mt-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-50">Download our app</h2>
                <div className="flex justify-center space-x-4">
                    <button className="px-6 py-3 bg-gray-800 text-gray-50 rounded hover:bg-gray-700">
                        <img src="/google-play.svg" alt="Google Play" className="h-8" />
                    </button>
                    <button className="px-6 py-3 bg-gray-800 text-gray-50 rounded hover:bg-gray-700">
                        <img src="/app-store.svg" alt="App Store" className="h-8" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
