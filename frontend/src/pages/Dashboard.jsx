import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="">
      <div className="bg-[#043873] h-[50px]  px-6 lg:px-44 pt-2">
        <Navbar />
      </div>
      <div className="flex justify-between">
        <div className="w-[20%]">section 1</div>
        <div className="w-[50%]">
          section 2
          <div></div>
        </div>
        <div className="w-[35%]">section 3</div>
      </div>
    </div>
  );
}
