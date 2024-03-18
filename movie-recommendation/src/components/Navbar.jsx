import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Logo from '../images/logo.png';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  function handleSearch(event) {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    navigate(`/search?q=${queryTerm}`); 
  }

  const handleSearchButtonClick = () => {
    setShowSearchForm(true);
  };

  const handleSearchFormClose = () => {
    setShowSearchForm(false);
  };

  return (
    <div className="flex items-center justify-between  z-[100] w-full
      absolute backdrop-filter backdrop-blur-lg bg-opacity-50 bg-gray-900 md:shrink-0">
     <div className="top-0 h-10 mt-[1px]">
            <Link to="/">
              <img className="h-12 w-40 mt-[-30px] hover:bg-red-200 bg-white" src={Logo} alt="Logo" />
            </Link>
          </div>
      <div className="flex">
        {showSearchForm ? (
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              name="search"
             autoComplete="off"
              id="search-navbar"
              className="block w-full p-2 text-sm text-white border-b border-gray-300 bg-transparent  
              dark:text-white dark:border-gray-600 dark:bg-transparent dark:placeholder-gray-400"
              placeholder="Search..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <button
              type="submit"
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
            >
              <FaSearch className="text-white" />
            </button>
            <button
              className="absolute top-1/2 right-[-32px] transform -translate-y-1/2 "
              onClick={handleSearchFormClose}
            >
              <span className="text-white">X</span>
            </button>
          </form>
        ) : (
          <button
            onClick={handleSearchButtonClick}
            className="p-2"
          >
            <FaSearch className="text-white" />
          </button>
        )}
      </div>
      <div className="flex items-center justify-center space-x-5 ">
        {user?.email ? (
          <>
            
            {/* <button  className="text-[#FFFDE3] px-3 py-1 rounded cursor-pointer  text-sm">
              Account
</button> */}

            <button
              // style={{ height: "32px", lineHeight: "32px" }}
              className="text-[#FFFDE3] px-3 py-1 rounded cursor-pointer bg-[#00204a] text-sm"
            >
            <Link to="/account" className="text-[#fff]">
              Account
            </Link>
            </button>
            <button
              onClick={handleLogOut}
              // style={{ height: "32px", lineHeight: "32px" }}
              className="text-[#FFFDE3] px-3 py-1 rounded cursor-pointer bg-[#00204a] text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
              <button className="text-[#FFFDE3] px-6 py-2 rounded cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-800 hover:from-purple-600 hover:to-yellow-600 hover:text-black shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <Link to="/signIn" className="text-[#fff]">
                Sign In
            </Link>
              </button>
              <button className="text-[#050502] px-6 py-2 rounded cursor-pointer bg-gradient-to-r from-purple-800 to-indigo-500 hover:from-purple-600 hover:to-violet hover:text-white shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <Link to="/signUp" className="text-[#fff]">
                Sign Up
            </Link>
              </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
