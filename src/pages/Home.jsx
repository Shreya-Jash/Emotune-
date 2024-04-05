import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import OurSol from '../components/OurSol'
import Working from '../components/Working'

export default function Home() {
  return (
    <div className=''>
        <Hero />
        <OurSol />
        <Working />
        <Contact />
        <Footer />
    </div>
  )
}
