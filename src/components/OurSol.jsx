import oursolAs from "../assets/oursolAs.svg";

export default function OurSol() {
  return (
    <div className="px-4 lg:px-44 mt-7 h-[650px] lg:h-[550px]">
      <h1 className="flex justify-center lg:justify-end text-3xl lg:text-5xl font-bold text-[#043873]">Our Solution</h1>
      <div className="lg:flex justify-between">
        <img src={oursolAs} className="lg:w-1/2" />
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <h2 className="mt-10 text-center lg:text-right lg:w-3/4 ">
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
