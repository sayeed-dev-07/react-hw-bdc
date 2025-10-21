
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SecondContainer from './components/SecondContainer'
function App() {


  return (
    <>
      <div className='hero-main w-full  bg-[#fffcf7] lg:px-[5%] sm:px-[2%] px-[0.7rem] xl:px-[10%]'>
        <Navbar />
        <Hero />
      </div>
      <div className='w-full  bg-[#fff] lg:px-[5%] sm:px-[2%] px-[0.7rem] xl:px-[10%]'>
        <SecondContainer />
      </div>
    </>
  )
}

export default App
