import React from 'react';

const Contact = () => {
    return (
        <div className='sm:py-[6rem] py-[3rem] text-center text-white flex items-center justify-center flex-col gap-y-[2rem]'>
            <p className='text-3xl sm:text-4xl '>Subscribe to get notified about update</p>
            <p className='text-[#ffffffb8]'>By subscribing with your mail, you will accept our privacy policy</p>
            <div className=" text-black flex gap-2 gap-y-[1rem] sm:flex-row flex-col w-[100%] sm:w-auto">
                <div >
                    <input className='placeholder:text-base w-full sm:w-auto  bg-[#454457] text-xl outline-none text-white px-[1.6rem] py-[0.6rem] rounded-md' type="email" placeholder="Enter your email" required />
                </div>
                <button className="px-[1.6rem] w-full sm:w-auto cursor-pointer py-[0.6rem] rounded-md bg-[#FFC059] text-xl">Subscribe us</button>
            </div>
        </div>
    );
};

export default Contact;