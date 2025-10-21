import React from 'react';
import Card from './Card';
import SecondContainerCard2 from './SecondContainerCard2';


const SecondContainer = () => {
    return (
        <div>
            <div className="cards flex items-center lg:flex-row flex-col justify-center gap-x-[2rem] gap-y-[2rem] py-[1rem] md:py-[4rem]">
            <Card color={'white'} />
            <Card color={'#F6F8FB'} />
        </div>
        <SecondContainerCard2 />
        </div>
    );
};

export default SecondContainer;