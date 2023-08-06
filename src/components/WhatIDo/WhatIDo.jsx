import React from 'react';
import Image from 'next/image'

const WhatIDo = () => {
    return (
        <div className='mt-[120px] mx-[80px]'>
            <h2 className='text-center text-[35px] font-bold'>What I Do</h2>
            <div className='flex justify-between items-center gap-3 mt-[50px]'>
                <div className='bg-[#FFF] skill p-[30px]'>
                    <Image src="/js.png" width="50" height="50" />
                    <h4 className='text-[20px] font-semibold mt-[30px]'>Vanilla JavaScript</h4>
                    <p className='text-[#757575] mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, possimus vel. Consectetur, esse nostrum? Atque?</p>
                </div>
                <div className='bg-[#FFF] skill p-[30px]'>
                    <Image src="/js.png" width="50" height="50" />
                    <h4 className='text-[20px] font-semibold mt-[30px]'>Vanilla JavaScript</h4>
                    <p className='text-[#757575] mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, possimus vel. Consectetur, esse nostrum? Atque?</p>
                </div>
                <div className='bg-[#FFF] skill p-[30px]'>
                    <Image src="/js.png" width="50" height="50" />
                    <h4 className='text-[20px] font-semibold mt-[30px]'>Vanilla JavaScript</h4>
                    <p className='text-[#757575] mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, possimus vel. Consectetur, esse nostrum? Atque?</p>
                </div>
                <div className='bg-[#FFF] skill p-[30px]'>
                    <Image src="/js.png" width="50" height="50" />
                    <h4 className='text-[20px] font-semibold mt-[30px]'>Vanilla JavaScript</h4>
                    <p className='text-[#757575] mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, possimus vel. Consectetur, esse nostrum? Atque?</p>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;