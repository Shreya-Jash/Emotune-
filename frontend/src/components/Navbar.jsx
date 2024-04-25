import PopUp from "./PopUp";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-scroll";
import Hamburger from "../assets/hamburger.png";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import emotune from "../assets/Emotune.png"

export default function Navbar({ setAuth, isAuthenticated }) {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  console.log(isAuthenticated)

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="flex justify-between text-white text-xl">
      <NavLink to="/" smooth={true}>
        <img src={emotune} alt="Logo" className=" h-8"/>
      </NavLink>

      <div
        className="md:hidden flex justify-center items-center"
        onClick={() => setIsMobile(true)}
      >
        <img src={Hamburger} className="h-7 overflow-hidden" alt="Menu" />
      </div>
      <div className="hidden md:flex justify-between cursor-pointer">
        <Link to="oursol" smooth={true} className="mr-10">
          Our Solution
        </Link>
        <Link to="working" smooth={true} className="mr-10">
          How it works?
        </Link>
        <Link to="contact" smooth={true} className="mr-10">
          Help
        </Link>
        {/* Conditional rendering of login/logout button */}
        {isAuthenticated ? (
          // If user is authenticated, render logout button
          <button
            className="bg-[#EAA41D] w-20 h-8 rounded-2xl flex justify-center text-[#043873] font-semibold"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          // If user is not authenticated, render login button
          <button
            className="bg-[#EAA41D] w-20 h-8 rounded-2xl flex justify-center text-[#043873] font-semibold"
            onClick={() => setModalOpen(true)}
          >
            Login
          </button>
        )}
        {modalOpen &&
          createPortal(
            <PopUp closeModal={handleButtonClick} setAuth={setAuth}></PopUp>,
            document.body
          )}
      </div>
    </div>
  );
}
