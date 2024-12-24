import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <Helmet>
        <title>About page</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Learn more about our mission, vision, and the brilliant minds behind our success.
          </p>
        </div>

        {/* Founders Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Founder 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
              <p className="text-gray-700 mt-2">
                With over 15 years of experience in real estate, John leads the team with a vision 
                to make property transactions seamless and efficient.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Founder 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Co-Founder & COO</p>
              <p className="text-gray-700 mt-2">
                Jane’s expertise in operations and client relations ensures that every customer receives 
                personalized and top-notch service.
              </p>
            </div>

            {/* Founder 3 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Founder 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
              <p className="text-gray-700 mt-2">
                Michael is the tech genius behind our innovative real estate platform, constantly improving 
                the user experience with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
        {/*  introducting section  */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-700 text-lg mb-4">
            We are a leading real estate company with a reputation for excellence and a passion for helping our clients achieve their property dreams. 
            Our experienced team is committed to providing personalized services that make the property buying and selling process seamless and stress-free.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            At our core, we believe in integrity, transparency, and professionalism. Whether you are looking for your dream home, a lucrative investment property, 
            or commercial space, we are here to guide you every step of the way.
          </p>
        </div>

          {/* Article Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 overflow-y-scroll h-[500px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <p className="text-gray-700 text-lg mb-4">
            Since our inception, we have been on a mission to redefine the real estate industry with innovative solutions and exceptional customer service. 
            From humble beginnings to becoming a market leader, our journey has been one of growth, learning, and unwavering commitment to our clients.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Our story began with a vision to create a company that values people over profits. We started small, but our passion and dedication helped us grow 
            into a trusted name in real estate. Over the years, we have expanded our services, embraced new technologies, and built lasting relationships with our clients.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Today, we are proud to have a diverse portfolio of properties and a team of experts who are dedicated to helping you find the perfect property.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Whether it's residential, commercial, or industrial real estate, our team works tirelessly to ensure you get the best value for your investment.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            We invite you to join us on this exciting journey as we continue to make dreams come true, one property at a time.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-gray-700 text-lg mb-4">
            We strive to transform the real estate industry by providing unparalleled services, 
            innovative solutions, and a seamless property-buying experience.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-gray-700 text-lg">For inquiries, reach out to us at:</p>
          <p className="text-gray-700 text-lg">Email: contact@realestate.com | Phone: +880-123456789</p>
        </div>
      </div>
    </div>
  );
};

export default About;
