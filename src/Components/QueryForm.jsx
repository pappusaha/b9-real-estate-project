import React from 'react';

const QueryForm = () => {
    return (
        <div className=''>
        <div
  className=" min-h-screen bg-cover bg-top bg-no-repeat h-auto py-20 px-32 "
  style={{
    backgroundImage: "url(https://demo02.houzez.co/wp-content/uploads/2020/02/slider1.jpg) ",
   
  }}>

  <div className="hero-content flex-col lg:flex-row text-neutral-content text-center ">
  <div className="text-center lg:text-left ">
      <h1 className="text-4xl font-bold w-4/5 mx-auto ">Design Custom Real Estate Inquiry Forms</h1>
      <p className="py-6 w-4/5 mx-auto">
      Design custom lead capture forms that integrate with the Houzez CRM


      </p>
    </div>
    <div className="max-w-md bg-white p-7 bg-opacity-60">
    <form className=''  >
      {/* <!-- Inquiry Type --> */}
      <div class="mb-4">
        <label for="inquiryType" class="block text-sm font-medium text-gray-700">Inquiry Type</label>
        <select id="inquiryType" name="inquiryType" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option>Select</option>
          <option>Purchase</option>
          <option>Rent</option>
          <option>Sale</option>
        </select>
      </div>

      {/* <!-- Information --> */}
      <div class="mb-4">
        <label for="infoType" class="block text-sm font-medium text-gray-700">Information</label>
        <select id="infoType" name="infoType" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option>I'm a</option>
          <option>Buyer</option>
          <option>Seller</option>
        </select>
      </div>

      {/* <!-- Name --> */}
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
          <input id="firstName" name="firstName" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
          <input id="lastName" name="lastName" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>
      </div>

      {/* <!-- Email --> */}
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
        <input id="email" name="email" type="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>

      {/* <!-- Location --> */}
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label for="city" class="block text-sm font-medium text-gray-700">Select City</label>
          <select id="city" name="city" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Select city</option>
            <option>City 1</option>
            <option>City 2</option>
          </select>
        </div>
        <div>
          <label for="zipCode" class="block text-sm font-medium text-gray-700">Zip Code</label>
          <input id="zipCode" name="zipCode" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>
      </div>

      {/* <!-- Property --> */}
      <div class="mb-4">
        <label for="propertyType" class="block text-sm font-medium text-gray-700">Property Type</label>
        <select id="propertyType" name="propertyType" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option>Select type</option>
          <option>Single Family home</option>
          <option>Malty-Family Home</option>
          <option>Student Home</option>
          <option>Modern Apartment</option>
        </select>
      </div>

      {/* <!-- Property Details --> */}
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label for="maxPrice" class="block text-sm font-medium text-gray-700">Max Price</label>
          <input id="maxPrice" name="maxPrice" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <label for="minSize" class="block text-sm font-medium text-gray-700">Minimum Size (Sq Ft)</label>
          <input id="minSize" name="minSize" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label for="beds" class="block text-sm font-medium text-gray-700">Number of Beds</label>
          <input id="beds" name="beds" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <label for="baths" class="block text-sm font-medium text-gray-700">Number of Baths</label>
          <input id="baths" name="baths" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>
      </div>

      {/* <!-- Submit --> */}
      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
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