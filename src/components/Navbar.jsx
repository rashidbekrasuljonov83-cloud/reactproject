import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="container">
      <div className="flex items-center justify-between py-4">
        <img src="Link.svg" alt="" />
        <div className="flex space-x-4 gap-8  items-center justify-center">
          <Link to="/home">Home</Link>
          <Link to="/post">Post</Link>
          <button className="bg-[#4346EF] text-white w-16 h-8 rounded-xl  flex items-center justify-center cursor-pointer hover:bg-blue-600 transition duration-300 border-none">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
