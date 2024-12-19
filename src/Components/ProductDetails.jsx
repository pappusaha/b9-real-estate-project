// import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link, useLoaderData, useParams } from 'react-router';
import { LiaBedSolid ,LiaLandmarkSolid} from "react-icons/lia";
import { MdOutlineShower ,MdGarage} from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { key } from 'localforage';


const  ProductDetails= () => {
 const pdtDetails= useLoaderData();
 
 const {id}= useParams()
 const idx=parseInt(id)
const estateDetails=pdtDetails.find(singleEstateDetails => singleEstateDetails.id === idx)

console.log(pdtDetails)
console.log(idx)

console.log(estateDetails)
    
    const { year_build,garage,status,estate_title,segment_name,main_image,description,price,bed,bathroom,area,location,facilities,agent_name,agent_img}=estateDetails
    return (
      <>
      <Navbar></Navbar>
      <section className=' mt-20 md:mt-40'> 
        <div className='flex-row lg:flex justify-between w-11/12 mx-auto'>
          <div className=' space-y-3'>
            <h2 className='text-3xl font-bold text-black'>{estate_title} </h2>
            <h3 className='text-xl font-bold text-black'>{segment_name}</h3>
            <div className='flex space-x-2 items-center'>
            <p className='text-xl font-semibold bg-lime-600 text-white py-1 px-4'>FEATURE</p>
            <p className='text-xl font-bold bg-stone-900 text-white py-1 px-4'>{status}</p>
               </div>
         

          </div>
          <div>
<p className='text-3xl font-bold text-black'>{price}</p>
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
<div className='bg-white py-10 px-5 border-white mt-10'>
   <div>
   <h3 className='text-xl font-semibold text-slate-900 border-b-2 pb-10'>
    Overview 

    </h3>

   </div>
   <div className='grid grid-cols-2  md:grid-cols-3 gap-8 pt-5'>
    <div>
      <p>Apartment</p>
      <p>{segment_name}</p>
    </div>
    <div>
      <LiaBedSolid />

      <p>Bedrooms {bed}</p></div>
    <div>
    <MdOutlineShower />

      <p>Bathrooms {bathroom}</p></div>
    <div>
    <MdGarage />

      <p>Garage{garage}</p></div>
    <div>
    <LiaLandmarkSolid />

      <p>{area}
</p></div>
    <div>
    <FaRegCalendarAlt />

      <p>Year Built{year_build}
    </p></div>
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
<div className='bg-white py-10 px-5 border-white mt-10 '>
<div className='flex justify-between pb-5 '>
<h3 className='text-xl font-semibold text-slate-800  pb-10'>Address</h3>
<Link to={'https://www.google.com/maps'}><button className=' bg-sky-400 text-white font-bold px-3 py-1 rounded-md'>Open Google on maps</button></Link>
</div> 
<div className=' flex justify-between space-x-8 border-t-2 pt-8 '>
  <div className='  w-1/2 mx-auto '>
  <div className='border-b-2 pb-4 flex justify-between items-center'> 
    <p className='text-black font-semibold'>Address</p>
  <p>{}</p>
  </div>
  <div className='border-b-2 pb-4 flex justify-between items-center'>
  <p className='text-black font-semibold'>City</p>
  <p>{location.state}</p>

  </div>
  <div className='border-b-2 pb-4 flex justify-between items-center'>
  <p className='text-black font-semibold'>State/county
  </p>
  <p>{location.country}</p>

  </div>
  </div>
  <div className='  w-1/2 mx-auto'>
  <div className='border-b-2 pb-4 flex justify-between items-center'> 
    <p className='text-black font-semibold'>Zip/Postal Code
    </p>
  <p>{location.zip_code}</p>
  </div>
  <div className='border-b-2 pb-4 flex justify-between items-center'>
  <p className='text-black font-semibold'>Area</p>
  <p>{location.area}</p>

  </div>
  <div className='border-b-2 pb-4 flex justify-between items-center'>
  <p className='text-black font-semibold'>Country
  </p>
  <p>{location.country}</p>

  </div>
  
  </div>
</div>

</div>
{/* end address section  */}

{/* start fecilitis section */}

<div className='bg-white py-10 px-5 border-white mt-10'>

  <div className='pb-12'>
    <h3 className='text-xl font-semibold text-slate-800 border-b-2 pb-10'>
    Features
    </h3>
  
  </div>
<div className=' space-x-5 '>
  
    <ul className='grid grid-cols-2 md:grid-cols-3 gap-6 list-disc p-6'>
     {
      facilities.map((facility, index) => (
        <li key={index} className="text-slate-800 font-semibold">{facility}</li>
      ))
     }
    </ul>
    
  
   
  
</div>
</div>
            </div>
            {/* profile section */}
            <div className='grid col-span-1'>
<div>
<div className='flex-row md:flex justify-between'>
<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img  src="https://demo02.houzez.co/wp-content/uploads/2016/02/agent-4-150x150.jpg" alt="Vincent Fuller" className="object-cover object-center lg:w-full h-full rounded " />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
			<span className="text-sm dark:text-gray-600">General manager</span>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="dark:text-gray-600">leroy.jenkins@company.com</span>
			</span>
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
					<path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
				</svg>
				<span className="dark:text-gray-600">+25 381 77 983</span>
			</span>
		</div>
	</div>
</div>
<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea placeholder='Hello, I am interested in [Light and modern apartment]' id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
	</form>
</div>
<div>
<div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
			<div className="flex space-x-3">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-gray-600">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			</div>
		</div>
		<div className="flex flex-col w-full">
			<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"></textarea>
			<button type="button" className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400">Leave feedback</button>
		</div>
	</div>
	<div className="flex items-center justify-center">
		<a rel="noopener noreferrer" href="#" className="text-sm text-gray-400">Maybe later</a>
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