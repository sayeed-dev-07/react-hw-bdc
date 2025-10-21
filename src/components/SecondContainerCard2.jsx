import React from 'react';
import messengerImg from '/images/messenger 1.png'
import rightArrow from '/images/right.png'
import wowIcon from '/images/emoji.png'

const SecondContainerCard2 = () => {
    return (
        <div className='flex py-[2rem] lg:py-[5rem] lg:flex-row flex-col items-start justify-center gap-x-[2rem]'>
            <div className='w-full lg:w-[50%]'>
                <img className='w-full' src={messengerImg} alt="" />
            </div>
            <div className='flex-1'>
                <p className='md:text-5xl text-3xl font-semibold inline'>Meet our premium features
                    that will make you wow <img className='inline' src={wowIcon} alt="" /> </p>
                <p className='lg:py-[2rem] py-[1rem] text-base md:text-xl'>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>

                <div className="card bg-base-100  shadow-md my-[1rem]">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Organize your project content</h2>
                        <p className='text-base md:text-xl'>Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.</p>
                    </div>
                </div>
                <div className="card bg-[#F6F8FB] shadow-md my-[1rem]">
                    <div className="card-body">
                        <div className='flex items-center justify-between text-base md:text-xl gap-6'>
                            Collaborate your multiple team support easily <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card bg-[#F6F8FB]  shadow-md my-[1rem] ">
                    <div className="card-body">
                        <div className='flex items-center justify-between text-base md:text-xl gap-6'>
                            Build your team's knowledge base system <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondContainerCard2;