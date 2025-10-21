import React from 'react';
import FeedBackCard from './FeedBackCard';
import img1 from '/images/mini-1.png'
import img2 from '/images/mini-2.png'
import img3 from '/images/mini-3.png'
import img4 from '/images/mini-4.png'
import img5 from '/images/mini-5.png'
import img6 from '/images/mini-6.png'
import img7 from '/images/mini-7.png'
import img8 from '/images/mini-8.png'

const FeedBackContainer = () => {
    return (
        <div className='py-[4rem]'>
            <p className='text-4xl text-center py-[1rem] font-semibold'>What client say about us</p>
            <p className='text-[#858B91] text-center'>Customer testimonial</p>
            <div className="overflow-hidden py-[2rem] sm:py-[6rem]">
                <div className="grid px-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:translate-x-[-5%] lg:w-[110%] items-start">
                    <FeedBackCard picture={img1} title='I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.' name='Minnie Horn' username='@hello.mimmie'/>
                    <FeedBackCard picture={img2} name='Veona Watson' title='Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.' username='@hi.veona'/>
                    <FeedBackCard picture={img3} name='Cherice Justin' title='For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend' username='@cherice.me'/>
                    <FeedBackCard picture={img4} name='Ava Mitchell' title='I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result' username='@ava.codes'/>
                    <FeedBackCard picture={img5} name='Noah Ramirez' title='From start to finish, everything was handled perfectly. Couldn’t ask for more!' username='@noahramz'/>
                    <FeedBackCard picture={img6} name='Sofia Nguyen' title='Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.' username='@sof.nguyen'/>
                    <FeedBackCard picture={img7} name='Oliver Kim' title='For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend' username='@oliver.dev'/>
                    <FeedBackCard picture={img8} name='Ethan Brooks' title='From start to finish, everything was handled perfectly. Couldn’t ask for more!' username='@ethan.brooks'/>
                    <FeedBackCard picture={img2} name='Isabella Flores' title='I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result' username='@bella.flores'/>
                    <FeedBackCard picture={img5} name='Luna Patel' title='Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.' username='@heyitsluna'/>
                </div>
            </div>

        </div>
    );
};

export default FeedBackContainer;