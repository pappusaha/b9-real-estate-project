import React from 'react';
import 'animate.css';

const QueryForm = () => {
    return (
        <div className="mt-40">
            <div
                className="min-h-screen bg-cover bg-top bg-no-repeat py-20 px-10 lg:px-32"
                style={{
                    backgroundImage: "url(https://demo02.houzez.co/wp-content/uploads/2020/02/slider1.jpg)",
                }}
            >
                <div className="hero-content flex-col lg:flex-row text-neutral-content text-center">
                    {/* Header Section */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold w-4/5 mx-auto animate__animated animate__bounce animate__delay-2s text-white drop-shadow-lg">
                            Design Custom Real Estate Inquiry Forms
                        </h1>
                        <p className="py-6 w-4/5 mx-auto text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-sm">
    Design custom lead capture forms that integrate with the Houzez CRM
</p>
                    </div>

                    {/* Form Section */}
                    <div className="max-w-md bg-white p-8 rounded-lg shadow-xl bg-opacity-80 backdrop-blur-lg">
                        <form>
                            {/* Inquiry Type */}
                            <div className="mb-4">
                                <label
                                    htmlFor="inquiryType"
                                    className="block text-lg font-semibold text-gray-800"
                                >
                                    Inquiry Type
                                </label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option>Select</option>
                                    <option>Purchase</option>
                                    <option>Rent</option>
                                    <option>Sale</option>
                                </select>
                            </div>

                            {/* Information */}
                            <div className="mb-4">
                                <label
                                    htmlFor="infoType"
                                    className="block text-lg font-semibold text-gray-800"
                                >
                                    Information
                                </label>
                                <select
                                    id="infoType"
                                    name="infoType"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option>I'm a</option>
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                            </div>

                            {/* Name */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-lg font-semibold text-gray-800"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-lg font-semibold text-gray-800"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-semibold text-gray-800"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Location */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label
                                        htmlFor="city"
                                        className="block text-lg font-semibold text-gray-800"
                                    >
                                        Select City
                                    </label>
                                    <select
                                        id="city"
                                        name="city"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option>Select city</option>
                                        <option>City 1</option>
                                        <option>City 2</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="zipCode"
                                        className="block text-lg font-semibold text-gray-800"
                                    >
                                        Zip Code
                                    </label>
                                    <input
                                        id="zipCode"
                                        name="zipCode"
                                        type="text"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Property */}
                            <div className="mb-4">
                                <label
                                    htmlFor="propertyType"
                                    className="block text-lg font-semibold text-gray-800"
                                >
                                    Property Type
                                </label>
                                <select
                                    id="propertyType"
                                    name="propertyType"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option>Select type</option>
                                    <option>Single Family Home</option>
                                    <option>Malty-Family Home</option>
                                    <option>Student Home</option>
                                    <option>Modern Apartment</option>
                                </select>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-md shadow hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-lg font-bold"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryForm;
