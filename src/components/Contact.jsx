import Contactbg from "../assets/ContactAs.svg";
export default function Contact() {
  return (
    <div className="px-44 h-[600px] mt-10">
      <h1 className="flex justify-end text-5xl font-bold">Contact Us-</h1>
      <div className="flex">
        <img className="w-[45%]" src={Contactbg} />
        <div className="w-[55%] text-[#043873] flex mt-20 justify-between">
          <form className="flex flex-col w-1/2 font-medium  pl-10">
            <h3 className="text-xl mb-2">Your Name - </h3>
            <input
              type="text"
              name="Name- "
              className="border-b-2 border-b-[#043873] mb-6"
            />
            <h3 className="text-xl mb-2">Contact Number - </h3>
            <input type="number" className="border-b-2 border-b-[#043873] mb-6" />
            <h3 className="text-xl mb-2">Email - </h3>
            <input type="email" className="border-b-2 border-b-[#043873] mb-6" />
            <button
              type="submit"
              className="w-20 h-8 rounded-2xl flex justify-center text-center bg-[#043873] text-white font-semibold"
            >
              Send
            </button>
          </form>
          <div className=" ml-10">
            <h2 className="text-xl font-bold">Our Contact:</h2>
            <h3 className=" text-m mb-10">shreyajash2001@gmail.com</h3>
            <h2 className="text-xl font-bold">Based in:</h2>
            <h3>Kolkata, West Bengal</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
