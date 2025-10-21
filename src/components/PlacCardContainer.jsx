import React from 'react';
import PlanCard from './PlanCard';
import planImg from '/images/plan.png'
import positive from '/images/positive.png'

const PlacCardContainer = () => {
    return (
        <div className='py-[1rem] md:py-[6rem]'>
            <div className='text-center py-[2rem] '>
                <p className='text-3xl sm:text-5xl font-semibold'>What deal suit you perfect</p>
                <p className='text-[#858B91] text-xl sm:text-2xl py-[2rem]'>Meet our pricing plan</p>
                <div className='flex items-center justify-center gap-[1rem] font-semibold'>
                    <p>Monthly Plan</p>
                    <img className='mt-2' src={planImg} alt="" />
                    <p>Annual Plan</p>
                </div>
            </div>
            <div className='flex py-[2rem] gap-y-[3rem] lg:flex-row flex-col items-center justify-center '>
                    <PlanCard  />
                    <PlanCard shadow={true} img={positive} bgcolor='#FFC059' color='#fff' padding='3rem' des='For the Pro users who work with modern data stack' price='$49.99/mo' name='Premium Pack'/>
            </div>
        </div>
    );
};

export default PlacCardContainer;