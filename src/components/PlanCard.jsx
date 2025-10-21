import React from 'react';
import negative from '/images/negative.png'
import positive from '/images/positive.png'

const PlanCard = ({
    padding = '2rem',
    bgcolor = '#fff9ee',
    color = '#FFC059',
    name = 'Startup Pack',
    price = '$25.99/mo',
    des = 'For the startup team who work with new come data stack',
    img = negative,
    shadow = false,
}) => {
    return (
        <div style={{ padding }} className={`p-[${padding}] ${shadow ? 'shadow-2xl' : 'shadow-none'} bg-white  rounded-md flex flex-col gap-y-[2rem]`}>
            <p className='font-semibold text-xl'>{name}</p>
            <p className='text-[#FFC059] text-3xl font-semibold'>{price}</p>
            <p className='text-[#819ab7]'>{des}</p>
            <div className="line bg-[#E0E2E4] h-[0.04rem] w-full"></div>
            <div className=' flex flex-col gap-y-[1rem]'>
                <div className='flex items-center justify-start gap-4'>
                    <img src={positive} alt="" />
                    <p>Ultimate access to all course, exercises and assessments</p>
                </div>
                <div className='flex items-center justify-start gap-4'>
                    <img src={positive} alt="" />
                    <p>Free acess for all kind of exercise corrections with downloads.</p>
                </div>
                <div className='flex items-center justify-start gap-4'>
                    <img src={positive} alt="" />
                    <p>Total assessment corrections with free download access system</p>
                </div>
                <div className='flex items-center justify-start gap-4'>
                    <img src={img} alt="" />
                    <p>Unlimited download of courses on the mobile app contents</p>
                </div>
            </div>
            
            <div className="line bg-[#E0E2E4] h-[0.04rem] w-full"></div>
            <div>
                <button style={{backgroundColor:bgcolor, color}} className={`w-full sm:w-[40%] py-[0.6rem] px-[2rem] font-semibold cursor-pointer rounded-md`}>
                    Start Free Trial
                </button>
            </div>
        </div>
    );
};

export default PlanCard;