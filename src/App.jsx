import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SecondContainer from './components/SecondContainer'
import Dashboard from './components/Dashboard'
import PlacCardContainer from './components/PlacCardContainer'
import FeedBackContainer from './components/FeedBackContainer'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {


  return (
    <>
      <div className='hero-main w-full text-black bg-[#fffcf7] lg:px-[5%] sm:px-[2%] px-[0.7rem] xl:px-[10%]'>
        <Navbar />
        <Hero />
      </div>
      <div className='w-full text-black bg-[#fff] lg:px-[5%] sm:px-[2%] px-[0.7rem] xl:px-[10%]'>
        <SecondContainer />
      </div>
      <div className='w-full text-black bg-[#353448] lg:pl-[10%] pr-0 sm:pl-[4%] pl-[0.7rem] md:pl-[10%]'>
        <Dashboard />
      </div>
      <div className='w-full text-black bg-[#F9FAFC] lg:px-[5%] sm:px-[2%] px-[0.7rem] xl:px-[10%]'>
        <PlacCardContainer />
      </div>
      <div className='w-full text-black bg-[#FFFCF7]'>
        <FeedBackContainer />
      </div>
      <div className='w-full text-black  bg-[#353448] lg:px-[5%] sm:px-[2%] px-[0.7rem] xl:px-[10%]'>
        <Contact />
      </div>
      <div className='w-full text-black  bg-[#09090b] lg:px-[5%] sm:px-[2%] px-[0.7rem] xl:px-[10%]'>
        <Footer />
      </div>
    </>
  )
}

export default App
