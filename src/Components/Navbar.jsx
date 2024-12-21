import 'animate.css';

import React, { useState } from 'react'
import { Home, Menu, X, Phone, LogIn } from 'lucide-react'
import { Link, NavLink } from 'react-router'
import UseAuth from '../Hooks/UseAuth';
// import { Button } from "@/components/ui/button"

const  Navbar=() =>{
const {logout, user}=UseAuth()
  const navLinks=<> 
  <li> <NavLink to={'/'}>Home</NavLink></li>
  <li> <NavLink to={'/projects'}>Projects</NavLink></li>
  <li> <NavLink to={'/about'}>About</NavLink></li>
  <li> <NavLink to={'/contact'}>Contact</NavLink></li>
  </>
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className=" bg-white bg-opacity-70 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:inline animate__animated animate__flash animate__delay-10s">SingleHomes</span>
              <span className="ml-2 text-xl font-bold text-gray-800 sm:hidden">SFH.com</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:justify-center flex-grow">
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
          {navLinks}
          </ul>
        </div>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center mr-4">
              <Phone className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-600 text-sm">+910245355325</span>
            </div>
          
     {
      user?.email ?
             <div className="dropdown dropdown-end">
             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
               <div className="w-10 rounded-full">
                 <img
                   alt="User "
                   src="https://i.postimg.cc/fRLBv1gH/Pappu-picture.jpg" />
               </div>
             </div>
             <ul
               tabIndex={0}
               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               <li>
                 <a className="justify-between">
                   Profile
                   <span className="badge">New</span>
                 </a>
               </li>
               <li><a>Settings</a></li>
               <li  className=' '><button onClick={() => logout()}>Logout</button></li>
             </ul>
           </div> :
           <Link to={'/login'}> <button className=' btn btn-sm text-lg text-slate-900 btn-ghost'> Log-In</button></Link>
     }
            
           
          </div>
          
          <div className="flex items-center md:hidden">
            <div className="flex items-center mr-2">
              <Phone className="h-5 w-5 text-blue-600 mr-1" />
              <span className="text-gray-600 text-xs">+910245355325</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
         <ul>
         {navLinks}
         </ul>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button  onClick={toggleLogin} variant="outline" size="sm" className="w-full flex items-center justify-center">
                <LogIn className="h-4 w-4 mr-2" /> <Link to={'/login'}>Login </Link>
               
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar