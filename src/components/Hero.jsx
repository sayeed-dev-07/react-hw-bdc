import React from 'react';
import heroImg from '/images/hero.png'
import sponsor from '/images/sponsor.png'

const Hero = () => {
    return (

        <div className="min-h-screen flex bg-[#FFFCF7]">
            <div className="flex items-center justify-center flex-col lg:flex-row-reverse gap-y-[2rem] gap-x-[5rem]">
                <img 
                    src={heroImg}
                    className="lg:max-w-2xl w-full px-1rem] rounded-lg"
                />
                <div className='w-full lg:w-[50%]'>
                    <h1 className="text-3xl md:text-6xl  font-bold">Ultimate support system for leading agencies</h1>
                    <p className="py-[2rem]">
                        Get your tests delivered at let home collect sample from the victory of the managments that supplies best
design system guidelines ever.
                    </p>
                    <div className='flex items-center justify-center lg:justify-start gap-[0.7rem] flex-wrap'>
                        <input className='py-[0.8rem] px-[0.6rem] text-md shadow-2xl bg-white rounded-md outline-none w-full sm:w-[300px]' type="text" placeholder='Enter Email address'/>
                        <button className="py-[0.6rem] text-xl px-[1.3rem] bg-[#FFC059] text-white rounded-md cursor-pointer w-full sm:w-auto">Get Started</button>
                    </div>
                    <div className='py-[2rem] flex  lg:block items-center justify-center'>
                        <img src={sponsor} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;