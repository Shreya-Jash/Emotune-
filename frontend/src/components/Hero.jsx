import Navbar from "./Navbar";
import heroAs from "../assets/heroAs.svg";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// toast.configure();

export default function Hero() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch(`${process.env.BACKEND_HOST}/auth/login`, {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);
  console.log(isAuthenticated)

  const handleContinueClick = () => {
    if (isAuthenticated) {
      // Navigate to dashboard if authenticated
      // You can replace '/dashboard' with the actual route to the dashboard
      window.location.href = '/dashboard';
      
    } else {
      // Show toast notification if not authenticated
      toast.error("Please log in to continue.");
    }
  };

  return (
    <div
      className="bg-[#043873] h-[500px] lg:h-[600px] px-6 lg:px-44 pt-6"
      id="hero"
    >
      <Navbar setAuth={setAuth} isAuthenticated={isAuthenticated} />
      <div className="md:flex justify-between md:mt-24 lg:mt-32 text-white">
        <div className="md:w-1/2 mt-20">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Sentiment Analysis of{" "}
          </h1>
          <h1 className="text-2xl lg:text-4xl font-bold pt-2 text-[#EAA41D]">
            Social Media Presence
          </h1>
         
            <button className="bg-[#EAA41D] w-32 h-10 rounded-2xl flex justify-center text-center text-[#043873] font-semibold mt-6 text-xl" onClick={handleContinueClick}>
              Continue →
            </button>
          
        </div>
        <div className="md:w-1/2">
          <img src={heroAs} className="" />
        </div>
      </div>
    </div>
  );
}
