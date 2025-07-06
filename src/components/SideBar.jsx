import React from "react";
import useAuthStore from "../store/AuthStore";
import useSideBarStore from "../store/SideBarStore";
import { CgClose, CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { BiUser, BiUserCircle } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";

const SideBar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();
  const { setShowSideBar, showSideBar } = useSideBarStore();

  const signOut = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      setIsAuthenticated(false);
      setUser(null);
      window.location.href = "/";
      toast.success("Successfully Signout");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className={`fixed top-0  z-50  h-screen ${
        showSideBar ? "right-0" : "rignt-[-1000px]"
      } bg-white border-l-2 border-black flex flex-col gap-3 px-4 py-4 w-[400px] transition-all ease-in-out delay-150 duration-300`}
    >
      <div className="flex items-center justify-between mb-10 border-b py-2">
        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <BiUserCircle className="text-5xl cursor-pointer" />
            <div className="flex flex-col">
              <span className="text-sm ">{user.email}</span>
              <span className="text-sm">@{user.username}</span>
            </div>
          </div>
        ) : (
          <Link
            className="text-md hover:font-semibold border border-black px-3 py-2 rounded-md"
            to={"/signin"}
          >
            SignIn
          </Link>
        )}
        <CgClose
          className="text-3xl cursor-pointer"
          onClick={() => setShowSideBar(false)}
        />
      </div>

      <div>
        <Link className="text-xl hover:font-semibold">All Events</Link>
      </div>
      <div>
        <Link className="text-xl hover:font-semibold">Download Tickets</Link>
      </div>
      {user?.role === "USER" ? (
        <div>
          <Link className="text-xl hover:font-semibold">
            Become an Organizer
          </Link>
        </div>
      ) : (
        <div>
          <Link className="text-xl hover:font-semibold">Your Organization</Link>
        </div>
      )}

      <hr />

      <div>
        <Link className="text-xl hover:font-semibold">Profile Settings</Link>
      </div>

      <div>
        <button
          className="text-sm hover:font-semibold px-3 py-2 bg-black rounded-lg text-white"
          onClick={signOut}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default SideBar;
