import React from 'react';
import logoImg from '/images/support.png'
import rightArrow from '/images/right.png'

const Card = ({color}) => {
    return (
        <div style={{backgroundColor:color}} className='p-[2rem]  flex items-start justify-center w-full lg:w-[50%] shadow-lg'>
            <div className='w-[20%] md:w-[10%] lg:w-[10%] mt-[1.5rem] lg:mt-[1rem]'>
                <img
                    src={logoImg}
                    alt="Movie" />
            </div>
            <div className="card-body flex-1">
                <h2 className="card-title flex items-start justify-between text-xl gap-[4rem]">Do you need help support <img src={rightArrow} alt="" /> </h2>
                <p>Get your website ads tests delivered at let collect sample from the victory of the update managments services.</p>
            </div>
        </div>
    );
};

export default Card;