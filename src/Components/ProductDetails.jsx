// import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link, useLoaderData, useParams } from 'react-router';
import { LiaBedSolid ,LiaLandmarkSolid} from "react-icons/lia";
import { MdOutlineShower ,MdGarage} from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
// import { key } from 'localforage';


const  ProductDetails= () => {
 const pdtDetails= useLoaderData();
 
 const {id}= useParams()
 const idx=parseInt(id)
const estateDetails=pdtDetails.find(singleEstateDetails => singleEstateDetails.id === idx)

    
    const { year_build,garage,status,estate_title,segment_name,main_image,description,price,bed,bathroom,area,location,facilities,agent_name,agent_img}=estateDetails
    return (
      <>
      {/* this is dynamic title */}
      <Helmet>
        <title>Product Details page {id}</title>
      </Helmet>
      <Navbar></Navbar>
      <section className=' bg-gray-50 pt-20 md:pt-40'> 
      <div className="flex flex-col lg:flex-row justify-between w-11/12 mx-auto p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
  <div className="space-y-4">
    <h2 className="text-3xl font-bold text-slate-900">{estate_title}</h2>
    <h3 className="text-xl font-semibold text-slate-700">{segment_name}</h3>
    <div className="space-x-2 flex items-center">
      <p className="text-lg font-medium bg-lime-600 text-white py-1 px-4 rounded-lg shadow-md">
        FEATURE
      </p>
      <p className="text-lg font-medium bg-stone-900 text-white py-1 px-4 rounded-lg shadow-md">
        {status}
      </p>
    </div>
  </div>
  <div className="mt-6 lg:mt-0">
    <p className="text-3xl font-extrabold text-slate-900">{price}</p>
  </div>
</div>

      <div className='w-11/12 mx-auto grid grid-cols-1  md:grid-cols-3 mt-16 gap-10'>
      <div className='grid col-span-2 grow '>
        {/* THis is carosol div  */}
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={main_image}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://demo02.houzez.co/wp-content/uploads/2016/03/019-584x438.jpg

"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://demo02.houzez.co/wp-content/uploads/2016/03/008-584x438.jpg

"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

{/* this is Overview div  */} 
<div className="bg-white py-10 px-6 border-white mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
  <div>
    <h3 className="text-2xl font-bold text-slate-900 border-b-4 border-slate-300 pb-4">
      Overview
    </h3>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
    <div className="flex flex-col items-start space-y-2">
      <p className="text-slate-600 font-medium">Apartment</p>
      <p className="text-slate-800 font-semibold">{segment_name}</p>
    </div>
    <div className="flex items-center space-x-3">
      <LiaBedSolid className="text-xl text-blue-600" />
      <p className="text-slate-800 font-medium">Bedrooms {bed}</p>
    </div>
    <div className="flex items-center space-x-3">
      <MdOutlineShower className="text-xl text-blue-600" />
      <p className="text-slate-800 font-medium">Bathrooms {bathroom}</p>
    </div>
    <div className="flex items-center space-x-3">
      <MdGarage className="text-xl text-blue-600" />
      <p className="text-slate-800 font-medium">Garage {garage}</p>
    </div>
    <div className="flex items-center space-x-3">
      <LiaLandmarkSolid className="text-xl text-blue-600" />
      <p className="text-slate-800 font-medium">{area}</p>
    </div>
    <div className="flex items-center space-x-3">
      <FaRegCalendarAlt className="text-xl text-blue-600" />
      <p className="text-slate-800 font-medium">Year Built {year_build}</p>
    </div>
  </div>
</div>

{/* overview end */}
{/* description section is started */}
<div className='bg-white py-10 px-5 border-white mt-10'>
<div>
   <h3 className='text-xl font-semibold text-slate-900 border-b-2 pb-10'>
   Description 

    </h3>

   </div>
<p className='pt-5 text-black'>{description}</p>
</div>
{/* end description */}

{/* start Address section  */}
<div className="bg-white py-10 px-5 border border-gray-200 rounded-lg shadow-md mt-10">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-5">
        <h3 className="text-2xl font-bold text-gray-800">Address</h3>
        <Link to={'https://www.google.com/maps'} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-md">
            Open in Google Maps
          </button>
        </Link>
      </div>

      {/* Address Details Section */}
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-8 border-t pt-8">
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          <div className="border-b pb-4 flex justify-between items-center">
            <p className="text-gray-700 font-semibold">Address</p>
            <p className="text-gray-600">{location?.address || 'N/A'}</p>
          </div>
          <div className="border-b pb-4 flex justify-between items-center">
            <p className="text-gray-700 font-semibold">City</p>
            <p className="text-gray-600">{location?.city || 'N/A'}</p>
          </div>
          <div className="border-b pb-4 flex justify-between items-center">
            <p className="text-gray-700 font-semibold">State/County</p>
            <p className="text-gray-600">{location?.state || 'N/A'}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <div className="border-b pb-4 flex justify-between items-center">
            <p className="text-gray-700 font-semibold">Zip/Postal Code</p>
            <p className="text-gray-600">{location?.zip_code || 'N/A'}</p>
          </div>
          <div className="border-b pb-4 flex justify-between items-center">
            <p className="text-gray-700 font-semibold">Area</p>
            <p className="text-gray-600">{location?.area || 'N/A'}</p>
          </div>
          <div className="border-b pb-4 flex justify-between items-center">
            <p className="text-gray-700 font-semibold">Country</p>
            <p className="text-gray-600">{location?.country || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
{/* end address section  */}

{/* start fecilitis section */}

<div className="bg-white py-10 px-5 border-white mt-10 rounded-lg shadow-md transition-transform transform hover:scale-105">
  <div className="pb-12">
    <h3 className="text-2xl font-bold text-slate-800 border-b-4 border-slate-300 pb-4">
      Features
    </h3>
  </div>
  <div className="space-x-5">
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-disc p-6">
      {facilities.map((facility, index) => (
        <li
          key={index}
          className="text-slate-800 font-semibold text-lg hover:text-blue-600 transition-colors"
        >
          {facility}
        </li>
      ))}
    </ul>
  </div>
</div>

            </div>
            {/* profile section */}
            <div className='grid col-span-1'>
            <div className="p-6 bg-white shadow-lg rounded-lg space-y-8">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
    <div className="flex-shrink-0 w-full md:w-32 h-44 sm:h-32 rounded-lg overflow-hidden">
      <img
        src="https://demo02.houzez.co/wp-content/uploads/2016/02/agent-4-150x150.jpg"
        alt="Vincent Fuller"
        className="object-cover w-full h-full transition-transform transform hover:scale-105"
      />
    </div>
    <div className="flex flex-col space-y-4 text-center md:text-left">
      <h2 className="text-2xl font-semibold text-gray-800">Leroy Jenkins</h2>
      <span className="text-sm text-gray-600">General Manager</span>
      <div className="space-y-2">
        <span className="flex items-center justify-center md:justify-start space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-label="Email address"
            className="w-5 h-5 text-gray-600"
          >
            <path
              fill="currentColor"
              d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
            ></path>
          </svg>
          <span className="text-gray-600">leroy.jenkins@company.com</span>
        </span>
        <span className="flex items-center justify-center md:justify-start space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-label="Phonenumber"
            className="w-5 h-5 text-gray-600"
          >
            <path
              fill="currentColor"
              d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
            ></path>
          </svg>
          <span className="text-gray-600">+25 381 77 983</span>
        </span>
      </div>
    </div>
  </div>
  <form noValidate className="space-y-6">
    <div>
      <label htmlFor="name" className="text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="Enter your full name"
        className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
      />
    </div>
    <div>
      <label htmlFor="email" className="text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
      />
    </div>
    <div>
      <label htmlFor="message" className="text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        rows="3"
        placeholder="Hello, I am interested in [Light and modern apartment]"
        className="w-full p-3 mt-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full p-3 text-sm font-bold tracking-wide text-white uppercase bg-violet-600 rounded-lg hover:bg-violet-700 focus:ring-2 focus:ring-violet-500"
    >
      Send Message
    </button>
  </form>
</div>

<div className="flex justify-center items-center min-h-screen  p-4">
  <div className="flex flex-col max-w-3xl w-full p-8 shadow-lg rounded-xl lg:p-12 bg-gray-900 text-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
    <div className="flex flex-col items-center w-full mb-8">
      <h2 className="text-4xl font-semibold text-center text-white mb-4 animate__animated animate__fadeIn">Your Opinion Matters!</h2>
      <div className="flex flex-col items-center py-6 space-y-3">
        <span className="text-center text-lg text-gray-300">How was your experience?</span>
        <div className="flex space-x-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} type="button" title={`Rate ${star} star`} aria-label={`Rate ${star} star`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-10 h-10 ${star <= 3 ? 'text-yellow-500' : 'text-gray-600'}`}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full space-y-4">
      <textarea
        rows="3"
        placeholder="Message..."
        className="p-4 rounded-md resize-none text-gray-100 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all duration-300"
      ></textarea>
      <button type="button" className="py-4 font-semibold rounded-md text-white bg-violet-400 hover:bg-violet-500 transition duration-300">
        Leave Feedback
      </button>
    </div>
    <div className="flex items-center justify-center mt-4">
      <a
        href="#"
        className="text-sm text-gray-400 hover:text-gray-300 transition duration-200"
      >
        Maybe later
      </a>
    </div>
  </div>
</div>

            </div>
      </div>
      </section>

      </>
    );
};

export default ProductDetails;