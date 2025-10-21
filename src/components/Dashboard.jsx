import React from 'react';
import imgOne from '/images/1.png'
import imgTwo from '/images/2.png'
import imgThree from '/images/3.png'
import imgFour from '/images/4.png'
import imgFive from '/images/5.png'
import dashboard from '/images/dashboard.png'

const Dashboard = () => {
    return (
        <div className=''>
            <div className='py-[4rem] hidden  w-full md:flex items-start'>
                <div className='w-[20%]'>
                    <img src={imgOne} alt="" />
                    <div className="line my-[1.2rem] bg-[#FFC059] h-[0.2rem]"></div>
                    <p className='text-[#FFC059]'>Budget Overview</p>
                </div>
                <div className='w-[20%] '>
                    <img src={imgTwo} alt="" />
                    <div className="line my-[1.2rem] bg-[#fff] h-[0.04rem]"></div>
                    <p className='text-white'>Create & adjust</p>
                </div>
                <div className='w-[20%] mt-[2px]'>
                    <img src={imgThree} alt="" />
                    <div className="line my-[1.2rem] bg-[#fff] h-[0.04rem]"></div>
                    <p className='text-white'>View Reports</p>
                </div>
                <div className='w-[20%] mt-[5px]'>
                    <img src={imgFour} alt="" />
                    <div className="line my-[1.2rem] bg-[#fff] h-[0.04rem]"></div>
                    <p className='text-white'>Optimize website</p>
                </div>
                <div className='w-[20%]'>
                    <img src={imgFive} alt="" />
                    <div className="line w-full my-[1.2rem] bg-[#fff] h-[0.04rem]"></div>
                    <p className='text-white'>Custom Dashboard</p>
                </div>
            </div>
            <div className='flex gap-x-[2rem] lg:flex-row flex-col'>
                <div className='text-white lg:w-[40%] w-full'>
                    <p className='md:text-5xl text-4xl font-semibold py-[2rem] md:leading-14 leading-normal '>Introduce quality feature
                        that boost your website
                        rank & performance</p>
                    <p className='text-xl leading-normal md:leading-10'>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.</p>
                    <p className='text-xl  w-[180px] font-medium px-[1.2rem] py-[0.6rem] bg-[#FFC059] rounded-md cursor-pointer my-[2rem]'>More Details</p>
                </div>
                <div className='flex-1'>
                    <img className='w-full' src={dashboard} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;