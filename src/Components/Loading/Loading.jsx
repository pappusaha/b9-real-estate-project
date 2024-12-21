import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen  ">
            {/* লোডিং স্পিনার */}
            <div className="flex flex-col items-center ">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                <p className="mt-4 text-lg font-semibold text-gray-600">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingPage;
