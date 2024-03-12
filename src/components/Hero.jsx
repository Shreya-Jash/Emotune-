import Navbar from './Navbar'
import heroAs from "../assets/heroAs.svg"

export default function Hero() {
  return (
    <div className='bg-[#043873] h-[600px] px-44 pt-6'>
        <Navbar />
        <div className='flex justify-between mt-32 text-white'>
            <div className='w-1/2 mt-20'>
                <h1 className='text-5xl font-bold'>Sentiment Analysis of </h1>
                <h1 className=' text-4xl font-bold pt-2 text-[#EAA41D]'>Social Media Presence</h1>
                <button className='bg-[#EAA41D] w-32 h-10 rounded-2xl flex justify-center text-center text-[#043873] font-semibold mt-6 text-xl'>Continue →</button>
            </div>
            <div className='w-1/2'>
                <img src={heroAs} className='' />
            </div>
        </div>
    </div>
  )
}
