import React from 'react';


const FeedBackCard = ({picture, title, name, username}) => {
    return (
        <div className='p-[2rem] items-start justify-between bg-white flex flex-col gap-y-[1.4rem] shadow-md'>
            <div>
                <p>{title}</p>
            </div>
            <div className='flex items-center justify-start gap-[1rem]'>
                <div>
                    <img src={picture} alt="" />
                </div>
                <div>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-blue-500'>{username}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedBackCard;