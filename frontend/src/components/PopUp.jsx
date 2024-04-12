import loginBg from "../assets/loginBg.svg";

const PopUp = ({closeModal}) => {
  return (
    <div className=" fixed left-0 top-0 w-full h-full  flex items-center justify-center bg-black/50">
      <div className="w-[700px] h-[550px] bg-white rounded-md">
        <div className="flex justify-between  w-auto">
          <div className="flex justify-center align-middle items-center w-[60%]">
            <div>
              <h1 className="text-blue-700 font-bold text-2xl text-center mb-3">
                LOG IN
              </h1>
              <h3 className="mb-3">How do I get started with project abc?</h3>
              <form className="flex flex-col">
                <input
                  placeholder="Username"
                  className="rounded-lg border-2 h-8 p-2 mb-3"
                />
                <input
                  placeholder="Password"
                  className="rounded-lg border-2 h-8 p-2 mb-3"
                />
                <button className="bg-[#241dea] w-20 h-8 rounded-2xl items-center text-[#ffffff] font-semibold">
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="w-[40%] h-[550px] bg-blue-500">
            <p
              onClick={() => closeModal("Modal was closed")}
              className="close flex justify-end mr-10 text-red-500 font-bold text-2xl cursor-pointer"
            >
              &times;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;