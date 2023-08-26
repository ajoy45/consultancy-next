import Image from 'next/image';
import React from 'react';
import icon1 from '@/images/product/icon1.png';
import icon2 from '@/images/product/icon2.png';
import icon3 from '@/images/product/icon3.png';
import arrow from '@/images/product/arrow.png';
import pattern from '@/images/product/pattern.png'
const Product = () => {
    return (
        <div className='bg-[#f6f9ff]'>
            <div className='py-32  max-w-screen-xl mx-auto '>
                <h1 className='text-center font-bold text-5xl mb-12'>One product, three solutions</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                    <div className='bg-white z-10 p-8 rounded-r-full hover:bg-blue-300'>
                        <div className='flex justify-center'>
                            <Image src={icon1} alt='' />
                        </div>
                        <h1 className='text-xl font-bold mb-4'>Roadmap to success</h1>
                        <p className='text-lg mb-3'>Design your future. Share your strategy with the people responsible for delivering it. Create clarity and buy-in.</p>
                        <div className='flex items-center'>
                            <button className='mr-2 text-blue-400'>Learn More</button>
                            <Image src={arrow} alt='' />
                        </div>
                    </div>
                    <div className='bg-white z-10 p-8 rounded-r-full hover:bg-blue-300'>
                        <div className='flex justify-center'>
                            <Image src={icon2} alt='' />
                        </div>
                        <h1 className='text-xl font-bold mb-4'>Goals that matter</h1>
                        <p className='text-lg mb-3'>Design your future. Share your strategy with the people responsible for delivering it. Create clarity and buy-in.</p>
                        <div className='flex items-center'>
                            <button className='mr-2 text-blue-400'>Learn More</button>
                            <Image src={arrow} alt='' />
                        </div>
                    </div>
                    <div className='bg-white z-10 p-8 rounded-r-full hover:bg-blue-300'>
                        <div className='flex justify-center'>
                            <Image src={icon3} alt='' />
                        </div>
                        <h1 className='text-xl font-bold mb-4'>Visible achievements</h1>
                        <p className='text-lg mb-3'>Design your future. Share your strategy with the people responsible for delivering it. Create clarity and buy-in.</p>
                        <div className='flex items-center'>
                            <button className='mr-2 text-blue-400'>Learn More</button>
                            <Image src={arrow} alt='' />
                        </div>
                    </div>


                </div>

            </div>
            <div>
                <Image src={pattern} alt='' />
            </div>
        </div>
    );
};

export default Product;