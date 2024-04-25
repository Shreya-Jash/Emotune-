import WorkAs from "../assets/WorkAs.svg";
export default function Working() {
  return (
    <div
      className="bg-[#a5cefc77] px-4 lg:px-44 h-screen md:h-[500px] pt-7"
      id="working"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-[#043873]">
        How it works?
      </h1>
      <div className="md:flex justify-between">
        <div className="md:w-1/2">
          <div className="mt-10 ml-10 text-center md:text-left md:w-3/4 md:pt-10">
            <div className="flex mb-10">
              <div className="w-5 h-5 bg-[#043873] rounded-lg mr-6 my-2"></div>
              <h3 className="font-bold text-xl">Upload Data to Emotune</h3>
            </div>
            <div className="flex mb-10">
              <div className="w-5 h-5 bg-[#043873] rounded-lg mr-6 my-2"></div>
              <h3 className="font-bold text-xl">Define Tags and Train</h3>
            </div>
            <div className="flex">
              <div className="w-5 h-5 bg-[#043873] rounded-lg mr-6 my-2"></div>
              <h3 className="font-bold text-xl">Get your analysis</h3>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end align-middle">
          <img src={WorkAs} className="md:h-[70%]" />
        </div>
      </div>
    </div>
  );
}
