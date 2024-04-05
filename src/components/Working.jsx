import WorkAs from "../assets/WorkAs.svg";
export default function Working() {
  return (
    <div className="bg-[#a5cefc77] px-4 lg:px-44 h-screen md:h-[600px] pt-7" id="working">
      <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-[#043873]">How it works?</h1>
      <div className="md:flex justify-between">
        <div className="md:w-1/2">
          <h2 className="mt-10 text-center md:text-left md:w-3/4 md:pt-10">
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
        <div className="md:w-1/2 flex justify-end align-middle">
            <img src={WorkAs} className="md:h-[90%]" />
        </div>
      </div>
    </div>
  );
}
