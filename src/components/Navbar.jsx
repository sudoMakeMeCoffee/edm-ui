import axios from "axios";
import React, { Profiler, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import useSideBarStore from "../store/SideBarStore";
import { CgClose, CgProfile } from "react-icons/cg";
import SideBar from "./SideBar";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, user } = useAuthStore();
  const { showSideBar, setShowSideBar } = useSideBarStore();

  
  return (
    <>
      <nav className="main-wrapper w-full flex justify-between items-center py-2 bg-white border-b-4 border-black">
        <Link to={"/"} id="logo">
          EDM
        </Link>
        <div className="flex items-center gap-6">
          <div>
            <Link to={"/events"} className="text-md hover:font-semibold">
              All Events
            </Link>
          </div>

          <div>
            {isAuthenticated ? (
              user.role === "USER" ? (
                <Link className="text-md hover:font-semibold" to={"/organization/create"}>
                  Become an Organizer
                </Link>
              ) : (
                <Link className="text-md hover:font-semibold" to={"/organization"}>
                  Your Organization
                </Link>
              )
            ) : (
              <Link className="text-md hover:font-semibold" to={"/signin"}>
                SignIn
              </Link>
            )}
          </div>

          <div>
            <FaBars
              className="text-xl cursor-pointer"
              onClick={() => setShowSideBar(!showSideBar)}
            />
          </div>
        </div>
      </nav>

      {showSideBar && <SideBar />}
    </>
  );
};

export default Navbar;
