import React, { useEffect, useState } from 'react';

import { GiFlatPlatform } from "react-icons/gi";
import { MdBathroom } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
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
  <section className=" py-10">
    {/* Header Section */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        Discover Our Best Deals
      </h1>
      <p className="text-lg text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin.
      </p>
    </div>

    {/* Products Grid */}
    <div className="grid px-4 md:px-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {displayedProducts.map((cart, index) => {
        const { id, price, status, segment_name, area, bathroom, bed, main_image } = cart;
        return (
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform  hover:-translate-y-2 transition  duration-300" key={price}>
            {/* Image Section */}
            <figure className="overflow-hidden rounded-t-lg">
              <img
                className="w-full h-64 object-cover"
                src={main_image}
                alt={segment_name}
              />
            </figure>

            {/* Card Content */}
            <div className="p-5 space-y-4">
              {/* Feature and Status */}
              <div className="flex justify-between text-gray-500 text-sm">
                <p className="font-medium">Feature</p>
                <p className="font-medium uppercase">{status}</p>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800">{segment_name}</h2>

              {/* Property Details */}
              <div className="flex justify-between text-gray-600">
                <p className="text-lg font-semibold text-cyan-700">{price}</p>
                <div className="flex items-center space-x-2">
                  <GiFlatPlatform className="w-5 h-5 text-cyan-700" />
                  <p>{area}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdBathroom className="w-5 h-5 text-cyan-700" />
                  <p>{bathroom}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <IoIosBed className="w-5 h-5 text-cyan-700" />
                  <p>{bed}</p>
                </div>
              </div>

              {/* View Property Button */}
              <div className="text-center">
                <NavLink
                  className="bg-cyan-700 text-white px-6 py-2 rounded-md font-medium    cursor-grab transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  duration-300" 
                  to={`/productDetails/${id}`}
                >
                  View Property
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* See More/Less Button */}
    <div className="text-center mt-10">
      {products.length > 6 && (
        <button
          className="px-8 py-2 rounded-md bg-cyan-700 text-white font-bold hover:bg-cyan-600 transition duration-300"
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