import Image from 'next/image';
import React from 'react';
import arrow from '@/assets/images/product/arrow.png';
import tik from '@/assets/images/features/tik.png';
import indicator from '@/assets/images/features/indicator.png';
import mark from '@/assets/images/features/icon.png';
import person1 from '@/assets/images/features/person1.png'
const Feature = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-24'>
            <div className='flex justify-between items-center flex-wrap'>
                <div>
                    <h1 className='text-6xl font-extrabold mb-6'>Finally a place <br /> where it all <br /> comes together</h1>
                    <p className='mb-6 text-xl'>Our simple but powerful OKR+ platform turns great <br /> strategies into amazing results. And it is free.</p>
                    <div className='flex items-center'>
                        <button className='mr-2 text-blue-400'>Learn More</button>
                        <Image src={arrow} alt='' />
                    </div>
                </div>

                <div className='bg-[#f1f5ff] p-24'>
                    <div  className='flex justify-between items-center gap-4 bg-white px-12 py-2 rounded-md'>
                        <div className='w-full'>
                            <div className='rounded-full text-[#f2f6ff] '
                                style={{ width: '100%', backgroundColor: '#f2f6ff' }}
                            > .</div>
                            <div className='flex items-center'>
                                <Image src={tik} alt='' />
                                <span className='ms-2 mt-3'>5 invitations</span>
                            </div>
                        </div>
                        <div className='w-full'>
                            <p>55/100% Needs attention</p>
                            <progress className="progress progress-success w-50 h-5 mt-3" value="70" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex mt-4 justify-between'>
                        <div>
                            <Image src={indicator} alt=''/> 
                        </div>
                        <div>
                           <div className='flex bg-white items-center p-3 mt-6 ms-3'>
                               <Image className='me-2' src={mark} alt=''/>
                               <progress className="progress progress-info w-56 me-2" value="70" max="100"></progress>
                               <Image src={person1}alt=''/>
                           </div>
                           <div className='flex bg-white items-center p-3 mt-6 ms-3'>
                               <Image className='me-2' src={mark} alt=''/>
                               <progress className="progress progress-info w-56 me-2" value="70" max="100"></progress>
                               <Image src={person1}alt=''/>
                           </div>
                           <div className='flex bg-white items-center p-3 mt-6 ms-3'>
                               <Image className='me-2' src={mark} alt=''/>
                               <progress className="progress progress-info w-56 me-2 "value="70" max="100"></progress>
                               <Image src={person1}alt=''/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Feature;