import Image from 'next/image';
import React from 'react';
import percentage from '@/assets/images/overview/percentage.png';
import curve from '@/assets/images/overview/curve.png';
import barChart from '@/assets/images/overview/barchat.png';
import arrow from '@/assets/images/product/arrow.png';
const Overview = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-between items-center gap-12 flex-wrap'>
                <div className='bg-[#f0f5ff] p-12'>
                    <div className='flex justify-between gap-12'>
                        <div className='bg-white z-10 px-6 py-3'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-xl'>status</h1>
                                <button className='bg-[#f0f5ff] px-3 py-2 rounded-full'>Today</button>
                            </div>
                            <div className='flex justify-center py-4'>
                                <Image src={percentage} alt='' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='me-4 text-center'>
                                    <h1 className='text-xl font-bold'>982</h1>
                                    <h1 className='text-xl '>Booked</h1>
                                </div>
                                <div className='me-4 text-center'>
                                    <h1 className='text-xl font-bold'>500</h1>
                                    <h1 className='text-xl '>Progress</h1>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-xl font-bold'>352</h1>
                                    <h1 className='text-xl '>Canceled</h1>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white z-10 px-6 py-3'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-xl font-bold'>overview</h1>
                                <button className='bg-[#f0f5ff] px-3 py-2 rounded-full'>Monthly</button>
                            </div>
                            <div className='mt-4'>
                                <h1 className='text-center font-bold'>$5,560</h1>
                                <p className='text-center'>Income</p>
                            </div>
                            <Image src={curve} alt='' />
                        </div>
                    </div>
                    <div className='mt-4 bg-white p-4'>
                        <h1 className='mb-5'> <span className='text-xl font-bold ms-6 '>$1,250</span> <span className='text-sm'>This week</span></h1>
                        <Image src={barChart} alt='' />
                    </div>
                </div>
                <div>
                    <h1 className='text-6xl font-extrabold mb-6'>Finally a place <br /> where it all <br /> comes together</h1>
                    <p className='mb-6 text-xl'>Our simple but powerful OKR+ platform turns great <br /> strategies into amazing results. And it is free.</p>
                    <div className='flex items-center'>
                        <button className='mr-2 text-blue-400'>Learn More</button>
                        <Image src={arrow} alt='' />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Overview;