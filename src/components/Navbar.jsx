import React from "react";
import { FaBars, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = ({isAuthenticated}) => (
  <nav className="px-5 fixed  top-0 left-0 right-0 w-full flex justify-between items-center py-2 bg-white border-b-4 border-black">
    <div>
      <FaBars className="text-black text-3xl" />
    </div>
    <Link to={"/"} id="logo">
      EDM
    </Link>
    <div className="flex items-center gap-6">
      {isAuthenticated ? (
        <FaUser className="w-[45px] h-[45px] bg-black rounded-full text-white p-3 cursor-pointer"/>
      ) : (
        <Link
          className="text-md  text-black border-2 border-black rounded-lg px-2 py-1 hover:font-semibold"
          to={"/signin"}
        >
          SignIn
        </Link>
      )}
    </div>
  </nav>
);

export default Navbar;
