import PopUp from "./PopUp";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";
import Hamburger from "../assets/hamburger.png";

export default function Navbar() {
  //mobile view
  const [isMobile, setIsMobile]= useState(false)

  const handleClick = () => {
    setIsMobile(false);
  }

  //Login Modal
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-between text-white text-xl">
      <Link to="hero" smooth={true}>Logo</Link>

      <div className="md:hidden flex justify-center items-center" onClick={() => setIsMobile(true)}>
        <img src={Hamburger} className=" h-7 overflow-hidden" />
      </div>
      <div className="hidden md:flex justify-between cursor-pointer">
        <Link to="oursol" smooth={true} className="mr-10">Our Solution</Link>
        <Link to="working" smooth={true} className="mr-10">How it works?</Link>
        <Link to="contact" smooth={true} className="mr-10">Help</Link>
        <button
          className=" bg-[#EAA41D] w-20 h-8 rounded-2xl flex justify-center text-[#043873] font-semibold"
          onClick={() => setModalOpen(true)}
        >Login</button>
        {modalOpen &&
          createPortal(
            <PopUp closeModal={handleButtonClick}></PopUp>,
            document.body
          )}
      </div>
    </div>
  );
}
