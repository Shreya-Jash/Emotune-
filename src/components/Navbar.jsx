import PopUp from "./PopUp"
import { useState } from "react"
import { createPortal } from "react-dom"

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };
  return (
    <div className='flex justify-between text-white text-xl'>
      {/* {message} */}
      <h2>Logo</h2>
      <div className='flex justify-between'>
        <h2 className='mr-10'>Our Solution</h2>
        <h2 className='mr-10'>How it works?</h2>
        <h2 className='mr-10'>Help</h2>
        <button className=' bg-[#EAA41D] w-20 h-8 rounded-2xl flex justify-center text-[#043873] font-semibold' onClick={() => setModalOpen(true)}> Login </button>
        {modalOpen &&
        createPortal(
          <PopUp
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            
          </PopUp>,
          document.body
        )}
      </div>
    </div>
  )
}
