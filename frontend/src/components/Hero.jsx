import Navbar from './Navbar'
import heroAs from "../assets/heroAs.svg"
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='bg-[#043873] h-[500px] lg:h-[600px] px-6 lg:px-44 pt-6' id='hero'>
        <Navbar />
        <div className='md:flex justify-between md:mt-24 lg:mt-32 text-white'>
            <div className='md:w-1/2 mt-20'>
                <h1 className='text-3xl lg:text-5xl font-bold'>Sentiment Analysis of </h1>
                <h1 className='text-2xl lg:text-4xl font-bold pt-2 text-[#EAA41D]'>Social Media Presence</h1>
                <Link to="/dashboard"><button className='bg-[#EAA41D] w-32 h-10 rounded-2xl flex justify-center text-center text-[#043873] font-semibold mt-6 text-xl'>Continue →</button></Link>
            </div>
            <div className='md:w-1/2'>
                <img src={heroAs} className='' />
            </div>
        </div>
    </div>
  )
}