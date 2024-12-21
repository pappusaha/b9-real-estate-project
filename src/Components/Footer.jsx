import React from 'react';
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

const Footer = () => {
    return (
		<footer className="bg-gray-900 text-gray-400 py-6">
		<div className="container mx-auto px-4">
		  <div className="flex flex-wrap items-center justify-between">
			{/* <!-- Links Section --> */}
			<div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-4">
			  <a href="#" className="hover:text-white">BLOG</a>
			  <a href="#" className="hover:text-white">NEWSLETTER</a>
			  <a href="#" className="hover:text-white">VIDEOS</a>
			  <a href="#" className="hover:text-white">GALLERY</a>
			  <a href="#" className="hover:text-white">HANDED OVER PROJECTS</a>
			  <a href="#" className="hover:text-white">REVIEWS</a>
			  <a href="#" className="hover:text-white">REAL ESTATE UPDATE</a>
			  <a href="#" className="hover:text-white">CAREER</a>
			  <a href="#" className="hover:text-white">FEEDBACK</a>
			  <a href="#" className="hover:text-white">PRIVACY</a>
			</div>
	  
			{/* <!-- Social Icons --> */}
			<div className="w-full lg:w-auto flex justify-center lg:justify-end gap-4 mt-4 lg:mt-0">
			  <a href="#" className="text-gray-400 hover:text-white">
				<i className="fab fa-facebook"></i>
			  </a>
			  <a href="#" className="text-gray-400 hover:text-white">
				<i className="fab fa-linkedin"></i>
			  </a>
			  <a href="#" className="text-gray-400 hover:text-white">
				<i className="fab fa-instagram"></i>
			  </a>
			  <a href="#" className="text-gray-400 hover:text-white">
				<i className="fab fa-youtube"></i>
			  </a>
			</div>
		  </div>
	  
		  <div className="text-center mt-6">
			<p>bti Celebration Point, Plot: 3 & 5, Road: 113/A, Gulshan-2, Dhaka-1212</p>
			<p>bti - Building Technology & Ideas Ltd. © 1984-2024</p>
		  </div>
	  
		  {/* <!-- Contact Icons --> */}
		  <div className="fixed bottom-4 right-4 flex flex-col gap-2">
			<a href="tel:16604" className="bg-black text-white rounded-full p-3 hover:bg-gray-700">
			  <i className="fas fa-phone"></i>
			</a>
			<a href="#" className="bg-green-500 text-white rounded-full p-3 hover:bg-green-600">
			  <i className="fab fa-whatsapp"></i>
			</a>
		  </div>
		</div>
	  </footer>
	  
	
	  
    );
};

export default Footer;