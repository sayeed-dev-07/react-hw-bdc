import React from 'react';
import icon from '/images/emoji (1).png'
import messenger from '/images/messengerMain.png'
import tikIcon from '/images/tik.png'
import rightIcon from '/images/rightButton.png'

const MessengerSection = () => {
    return (
        <div className='flex lg:flex-row flex-col'>
            <div className='lg:w-[50%] w-full'>
                <p className='md:text-5xl mt-[3rem] py-[2rem] text-3xl font-semibold inline'>Built in one app to make instant reply with in lowest minutes <img className='inline' src={icon} alt="" /> </p>
                <p className='lg:py-[2rem] py-[1rem] text-base md:text-xl'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                <div className='grid md:grid-cols-2 gap-y-[1rem] w-[45%] lg:w-[70%] font-medium'>
                    <div className='flex items-center justify-start gap-2 '>
                        <img src={tikIcon} alt="" />
                        <p>Medical and vision</p>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <img src={tikIcon} alt="" />
                        <p>HSAs and FSAs</p>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <img src={tikIcon} alt="" />
                        <p>Life insurance</p>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <img src={tikIcon} alt="" />
                        <p>Commuter benefits</p>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <img src={tikIcon} alt="" />
                        <p>400(k) savings</p>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <img src={tikIcon} alt="" />
                        <p>529 college savings</p>
                    </div>
                </div>
                <div className='my-[2rem] flex items-center justify-start gap-4 text-xl text-[#3183FF] cursor-pointer'>
                    <p>Explore more</p>
                    <div className='mt-[0.4rem]'>
                        <img className='w-full' src={rightIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <img src={messenger} alt="" />
            </div>
        </div>
    );
};

export default MessengerSection;