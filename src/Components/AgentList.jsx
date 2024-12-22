import React from 'react';

const AgentList = () => {
    return (
        <> 
            <section className='mt-36 text-center px-4 bg-gray-100 py-10'>
                {/* Section Header */}
                <div>
                    <h3 className='text-4xl font-bold text-gray-800'>Meet Our Real Estate Agents</h3>
                    <p className='text-gray-600 mt-4 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin.
                    </p>
                </div>

                {/* Agent Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-11/12 mx-auto mt-10'>
                    {/* Agent Card 1 */}
                    <div className='bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6 rounded-lg'>
                        <div className='flex justify-center mb-4'>
                            <img
                                className='rounded-full w-24 h-24'
                                src="https://demo02.houzez.co/wp-content/uploads/2016/02/Artboard-2team-150x150.jpg"
                                alt="Brittany Watkins"
                            />
                        </div>
                        <h5 className='text-lg font-semibold text-gray-800'>Brittany Watkins</h5>
                        <p className='text-sm text-blue-600'>Company Agent, All American Real Estate</p>
                        <p className='text-sm text-gray-600 mt-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...
                        </p>
                        <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500'>
                            View Profile
                        </button>
                    </div>

                    {/* Agent Card 2 */}
                    <div className='bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6 rounded-lg'>
                        <div className='flex justify-center mb-4'>
                            <img
                                className='rounded-full w-24 h-24'
                                src="https://demo02.houzez.co/wp-content/uploads/2016/02/agent-1-150x150.jpg"
                                alt="Michelle Ramirez"
                            />
                        </div>
                        <h5 className='text-lg font-semibold text-gray-800'>Michelle Ramirez</h5>
                        <p className='text-sm text-blue-600'>Company Agent, Modern House Real Estate</p>
                        <p className='text-sm text-gray-600 mt-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...
                        </p>
                        <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500'>
                            View Profile
                        </button>
                    </div>

                    {/* Agent Card 3 */}
                    <div className='bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6 rounded-lg'>
                        <div className='flex justify-center mb-4'>
                            <img
                                className='rounded-full w-24 h-24'
                                src="https://demo02.houzez.co/wp-content/uploads/2016/02/agent-3-150x150.jpg"
                                alt="Samuel Palmer"
                            />
                        </div>
                        <h5 className='text-lg font-semibold text-gray-800'>Samuel Palmer</h5>
                        <p className='text-sm text-blue-600'>Company Agent, Modern House Real Estate</p>
                        <p className='text-sm text-gray-600 mt-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...
                        </p>
                        <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500'>
                            View Profile
                        </button>
                    </div>

                    {/* Agent Card 4 */}
                    <div className='bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6 rounded-lg'>
                        <div className='flex justify-center mb-4'>
                            <img
                                className='rounded-full w-24 h-24'
                                src="https://demo02.houzez.co/wp-content/uploads/2016/02/agent-4-150x150.jpg"
                                alt="Vincent Fuller"
                            />
                        </div>
                        <h5 className='text-lg font-semibold text-gray-800'>Vincent Fuller</h5>
                        <p className='text-sm text-blue-600'>Company Agent, Country House Real Estate</p>
                        <p className='text-sm text-gray-600 mt-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...
                        </p>
                        <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500'>
                            View Profile
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AgentList;
