import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-png.svg"; 

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-10 py-5 bg-[#C0FFB3]">
      
      {/* Logo */}
      <div className="logo mr-5">
        <a href="/">
          <img src={logo} alt="Logo" className="w-[100px] h-auto" />
        </a>
      </div>

      {/* Search */}
      <div className="flex-1 flex-start justify-center">
     <input
      type="text"
      name="search"
      placeholder="Search"
      className="w-52 px-3 py-2 bg-white border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 placeholder-black transition duration-300"
      />
     </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 list-none">
          <li
            className="cursor-pointer font-medium text-black hover:text-blue-500 transition-colors duration-300"
            onClick={() => navigate("/Home")}
            >
            Home
          </li>
        <li
            className="cursor-pointer font-medium text-black hover:text-blue-500 transition-colors duration-300"
            onClick={() => navigate("/admin")}
            >
            Dashboard
          </li>

          <li 
            className="cursor-pointer font-medium text-black hover:text-blue-500 transition-colors duration-300" 
            onClick={() => navigate("/Browse")}>
            Browse
          </li>
          <li 
            className="cursor-pointer font-medium text-black hover:text-blue-500 transition-colors duration-300"
            onClick={() => navigate("/Instruction")}>
            Help
          </li>
          <li 
             className="cursor-pointer font-medium text-black hover:text-blue-500 transition-colors duration-300" 
             onClick={() => navigate("/subscription")}>
            Subscribe
          </li>
          <li
            className="cursor-pointer font-medium text-black hover:text-blue-500 transition-colors duration-300"
            onClick={() => navigate("/settings")}
          >
            Profile
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;



