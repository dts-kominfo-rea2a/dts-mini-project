import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/">
                  <img className="h-8 w-8" src={Logo} alt="Workflow" />
                </NavLink>
              </div>
              <div className="md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/popular"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    New And Popular
                  </NavLink>

                  <NavLink
                    to="/series"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    Series
                  </NavLink>

                  <NavLink
                    to="/genres"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    Genres
                  </NavLink>

                  <NavLink
                    to="/mylist"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    My List
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="mr-2 flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
