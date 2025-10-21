import React from 'react';
import mainLogo from '/images/main-logo.png'
import ArrowIcon from '/images/arrow.svg'
import SearchIcon from '/images/search.png'
import lockIcon from '/images/lock.png'

const Navbar = () => {
    return (
        <div className='w-full py-[1.5rem] flex items-center justify-between'>
            <div className='flex items-center justify-between'>
                <div className='block lg:hidden'>
                    <div className="dropdown dropdown-start">
  <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-[95vw] h-[40vh] mx-auto p-2 shadow-sm items-center justify-center text-xl">
    <li className='w-[100%] text-center'><a className="w-full block text-center">Home</a></li>
    <li className='w-[100%] text-center'><a className="w-full block text-center">About</a></li>
    <li className='w-[100%] text-center'><a className="w-full block text-center">Adversite</a></li>
    <li className='w-[100%] text-center'><a className="w-full block text-center">Supports</a></li>
   
  </ul>
</div>
                </div>
                <div className='w-[150px] md:w-[200px]'><img className='w-full' src={mainLogo} alt="" /></div>
                <div className='text-xl font-medium lg:flex items-center justify-between gap-[2rem] hidden'>
                    <a href="">Home</a>
                    <a className='flex items-center justify-between' href="">Adversite <img src={ArrowIcon} alt="" /></a>
                    <a className='flex items-center justify-between' href="">Supports <img src={ArrowIcon} alt="" /></a>

                    <a href="">About</a>
                    <a href=""><img src={SearchIcon} alt="" /> </a>
                </div>
            </div>
            <div className='flex items-center justify-between gap-[0.8rem] md:gap-[2rem]'>
                <div className='hidden sm:flex gap-[0.4rem] items-center justify-center'>
                    <div>
                        <img src={lockIcon} alt="" />
                    </div>
                    <p>Login</p>
                </div>
                <div>
                    <button className="btn bg-[#FFF0D7] text-[#E5A740] border-none btn-sm md:btn-md lg:btn-lg xl:btn-xl">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;