import React from 'react';

const Faq = () => {
    return (
        <section className="mt-32 bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-gray-500">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-gray-800">Frequently Asked Questions</h2>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 bg-white shadow-lg rounded-lg mb-4">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium text-gray-700">
                            What is the process for buying a home?
                        </div>
                        <div className="collapse-content text-gray-600">
                            <p>The process includes determining your budget, getting pre-approved for a loan, searching for homes that meet your criteria, scheduling visits and inspecting properties, making an offer and negotiating the price, and finalizing the paperwork to close the deal.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 bg-white shadow-lg rounded-lg mb-4">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium text-gray-700">
                            How do I know if I am eligible for a mortgage?
                        </div>
                        <div className="collapse-content text-gray-600">
                            <p>Eligibility depends on factors such as your credit score, income, debt-to-income ratio, and employment history. You should consult with a mortgage lender to assess your situation and get pre-approved.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 bg-white shadow-lg rounded-lg mb-4">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium text-gray-700">
                            What are the common expenses when buying a house?
                        </div>
                        <div className="collapse-content text-gray-600">
                            <p>Common expenses include the down payment, closing costs (which are typically 2-5% of the home price), property taxes, homeowners insurance, and moving costs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
