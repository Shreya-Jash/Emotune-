import oursolAs from "../assets/oursolAs.svg";
import headerbg from "../assets/headerbg.svg"


export default function OurSol() {
  return (
    <div className="px-4 lg:px-44 mt-7 h-[650px] md:h-[550px]" id="oursol">
      <h1 className="flex justify-center md:justify-end text-3xl md:text-5xl font-bold text-[#043873]"><h2 className="absolute z-10">Our Solution</h2>
      <img src={headerbg} className="relative pt-6 md:pt-8 w-[70%]  lg:w-auto"/></h1>
      <div className="md:flex justify-between">
        <img src={oursolAs} className="md:w-1/2" />
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <h2 className="mt-10 text-center md:text-right md:w-3/4 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </h2>
        </div>
      </div>
    </div>
  );
}
