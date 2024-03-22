import WorkAs from "../assets/WorkAs.svg";
export default function Working() {
  return (
    <div className="bg-[#a5cefc77] px-4 lg:px-44 h-screen lg:h-[600px] pt-7">
      <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left text-[#043873]">How it works?</h1>
      <div className="lg:flex justify-between">
        <div className="lg:w-1/2">
          <h2 className="mt-10 text-center lg:text-left lg:w-3/4 lg:pt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries.
          </h2>
        </div>
        <div className="lg:w-1/2 flex justify-end align-middle">
            <img src={WorkAs} className="lg:h-[90%]" />
        </div>
      </div>
    </div>
  );
}
