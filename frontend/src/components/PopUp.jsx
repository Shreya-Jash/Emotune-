// import loginBg from "../assets/loginBg.svg";
import { useState } from "react";
import { toast } from "react-toastify";

const PopUp = ({ closeModal, setAuth }) => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });

  // console.log(setAuth)

  const { name, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      // console.log(response)
      const parseRes = await response.json();

      console.log(parseRes)

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        closeModal();
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

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
              <form className="flex flex-col" onSubmit={onSubmitForm}>
                <input
                  name="name"
                  value={name}
                  type="text"
                  placeholder="Username"
                  onChange={(e) => onChange(e)}
                  className="rounded-lg border-2 h-8 p-2 mb-3"
                />
                <input
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => onChange(e)}
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
