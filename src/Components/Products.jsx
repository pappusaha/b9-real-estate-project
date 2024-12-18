import React, { useEffect, useState } from 'react';

import { GiFlatPlatform } from "react-icons/gi";
import { MdBathroom } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import ProductDetails from './ProductDetails';
import { NavLink } from 'react-router';

const Products = () => {

    const [products, setProducts]=useState([])
    const [showAll, setShowAll] = useState(false); 
useEffect(() => {
    fetch('Products.Json')
    .then( response =>  response.json())
    .then(data => setProducts(data))
},[])
const displayedProducts = showAll ? products : products.slice(0, 6);

    return (
        <section className=''>
            <div className='text-center'>
            <h1 className='text-3xl'>Discover Our Best Deals</h1>
            <p>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin
            </p>
        </div>
<div className='grid  px-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
{
 
 displayedProducts.map((cart,index) => {
    const { id, price, status, segment_name, area,bathroom,bed,main_image } = cart; // Destructure here
    return (
      <div className=''  key={price}> 
        <div className="card bg-base-100 w-96 shadow-xl ">
          <figure>
        <img className='' src={main_image} alt="" />
       
          </figure>
          <div className='flex justify-between p-2'>
          <p>Feature</p>
          <p>{status}</p>
        </div>
          <div className="p-3 space-y-4">
            <h2 className="card-title">{segment_name}</h2>
            <div className='flex justify-between'>
            <div>
            <p>{price}</p>
            </div>
            <div className='flex items-center space-x-2'>
                
            <GiFlatPlatform className='w-5 h-5' />
            <p>{area}</p>
            </div>
           <div className='flex items-center space-x-2'>
           <MdBathroom />
            <p>{bathroom}</p>
           </div>
          <div className='flex items-center space-x-2'>
          <IoIosBed />
            <p>{bed}</p>
          </div>



            </div>
          
            <div className="card-actions justify-start">
           <NavLink to={`/productDetails/${id}`}> View Details </NavLink>
               </div>
          </div>
        </div>

      </div>
      
    );
  })
  
}


</div>
<div className='text-center'>
{products.length > 6 && (
    <button
      className="btn btn-secondary"
      onClick={() => setShowAll(!showAll)}
    >
      {showAll ? "See Less" : "See More"}
    </button>
  )}
</div>
        </section>
    );
};

export default Products;