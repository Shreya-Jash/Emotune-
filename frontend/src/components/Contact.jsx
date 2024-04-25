import Contactbg from "../assets/ContactAs.svg";
import headerbg from "../assets/headerbg.svg"

export default function Contact() {
  return (
    <div className="px-4 lg:px-44 h-[700px] md:h-[600px] mt-10" id="contact">
      <h1 className="flex justify-center md:justify-end text-3xl md:text-5xl font-bold text-[#043873] mb-4 md:mb-0">
      <h2 className="absolute z-10"> Contact Us-  </h2><img src={headerbg} className="relative pt-6 md:pt-8 w-[70%]  lg:w-auto"/>
      </h1>
      <div className="md:flex">
        <div className="flex justify-center md:block">
          <img className="w-[80%] md:w-[90%] lg:w-full" src={Contactbg} />
        </div>
        <div className="md:w-[60%] lg:w-[55%] text-[#043873] flex mt-20 justify-between">
          <form className="flex flex-col w-1/2 font-medium  md:pl-10">
            <h3 className="text-lg md:text-xl mb-2">Your Name - </h3>
            <input
              type="text"
              name="Name- "
              className="border-b-2 border-b-[#043873] mb-6"
            />
            <h3 className="text-lg lg:text-xl mb-2">Contact Number - </h3>
            <input
              type="number"
              className="border-b-2 border-b-[#043873] mb-6"
            />
            <h3 className="text-lg lg:text-xl mb-2">Email - </h3>
            <input
              type="email"
              className="border-b-2 border-b-[#043873] mb-6"
            />
            <button
              type="submit"
              className="w-20 h-8 rounded-2xl flex justify-center text-center bg-[#043873] text-white font-semibold"
            >
              Send
            </button>
          </form>
          <div className="ml-2 w-1/2 md:justify-end md:ml-10">
            <h2 className="text-lg font-bold">Our Contact:</h2>
            <h3 className="text-m overflow-scroll md:overflow-hidden mb-10">
              shreyajash2001@gmail.com
            </h3>
            <h2 className="text-lg font-bold">Based in:</h2>
            <h3 className="text-m mb-10">Kolkata, West Bengal</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
