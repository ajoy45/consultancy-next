import React from 'react';
// import image from '../../../src/images/banner/img.png'
// import ee from '../../../public/assets/images/banner/'
import image from '../../../public/assets/images/banner/img.png'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='md:flex md:justify-between items-center max-w-screen-xl mx-auto '>
            <div>
                <h1 className='text-6xl font-extrabold mb-6'>Your strategy is <br /> only as good as <br /> you execute it</h1>
                <p className='mb-6 text-xl'>Our simple but powerful OKR+ platform turns great <br /> strategies into amazing results. And it is free.</p>
                <div className="join">
                    <input className="input input-bordered join-item" placeholder="Enter your Email" />
                    <button className="btn join-item bg-[#3C4BA6] text-white">Get Started</button>
                </div>
            </div>
            <div>
                <Image className='w-[454px] h-[542px]' src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;