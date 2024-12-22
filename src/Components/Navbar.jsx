import 'animate.css';
import React, { useState } from 'react';
import { Home, Menu, X, Phone, LogIn } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Navbar = () => {
  const { logout, user } = UseAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-blue-600  hover:font-extrabold">
          Home
        </NavLink>
      </li>
      <PrivateRoute>
        <li>
          <NavLink to="/projects" className="hover:text-blue-600  hover:font-extrabold">
            Projects
          </NavLink>
        </li>
      </PrivateRoute>
      <li>
        <NavLink to="/about" className="hover:text-blue-600  hover:font-extrabold">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-blue-600  hover:font-extrabold">
          Contact
        </NavLink>
      </li>
    </>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-80 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:inline animate__animated animate__flash">
                SingleHomes
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <ul className="menu menu-horizontal px-4 space-x-6 font-semibold text-gray-700">
              {navLinks}
            </ul>
          </div>

          {/* Contact and User Section */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-gray-600 space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-sm">+910245355325</span>
            </div>
            {user?.email || user?.displayName ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar flex items-center"
                >
                  <img
                    className="w-10 rounded-full"
                    src={user?.photoURL || 'https://i.postimg.cc/fRLBv1gH/Pappu-picture.jpg'}
                    alt="User"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>{user?.displayName || 'User'}</a>
                  </li>
                  <li>
                    <button onClick={logout} className="text-red-500">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-500">
                  Log-In
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="space-y-4 p-4 font-medium text-gray-700">{navLinks}</ul>
          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <span className="flex items-center text-gray-600 text-sm space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>+910245355325</span>
            </span>
            {!user?.email ? (
              <Link to="/login">
                <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-500">
                  Log-In
                </button>
              </Link>
            ) : (
              <button onClick={logout} className="text-red-500">
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
