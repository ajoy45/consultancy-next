import Image from 'next/image';
import React from 'react';
import profile from '@/images/join/person.png';
import leftVector from'@/images/join/vector1.png';
import rightVector from'@/images/join/vector2.png';
const Join = () => {
    return (
        <div className='max-w-screen-xl mx-auto relative mt-24'>
            <div className='text-center my-12'>
                <h1 className='text-3xl font-bold mb-3'>Join hundreds of successful <br />organizations</h1>
                <p>Companies of every size, and in 62 different countries, are using Perdoo to beat their competitors.</p>
            </div>
            <div className='flex  items-center join-container lg:bg-[#191919] flex-wrap'>
                <div>
                    <Image src={profile} alt=''/>
                </div>
                <div className='md:ms-10'>
                   <h1 className='lg:text-white text-3xl'>“Peboo enabled everyone in our <br /> organization to focus on results <br /> that matter, and got everyone <br /> pointed in the same direction.”</h1>
                   <p className='lg:text-white mt-4 text-lg'>Shannon Lincoln</p>
                   <span className='md:text-white text-sm'>VP Finance, Shippo</span>
                </div>
            </div>
            <div className='absolute top-32 -left-6 lg:block hidden'>
                <Image  src={leftVector} alt=''/>
            </div>
            <div className='absolute top-32 -right-12 lg:block hidden'>
                <Image  src={rightVector} alt=''/>
            </div>
        </div>
    );
};

export default Join;