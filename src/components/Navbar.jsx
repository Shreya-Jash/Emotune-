import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className='flex justify-between text-white text-xl'>
      <h2>Logo</h2>
      <div className='flex justify-between'>
        <h2 className='mr-10'>Our Solution</h2>
        <h2 className='mr-10'>How it works?</h2>
        <h2 className='mr-10'>Help</h2>
        <button className=' bg-[#EAA41D] w-20 h-8 rounded-2xl flex justify-center text-[#043873] font-semibold'>Login</button>
      </div>
    </div>
  )
}
