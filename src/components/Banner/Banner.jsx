import Image from 'next/image';
import React from 'react';


const Banner = () => {
    return (
        <div className='banner flex items-center justify-center pt-[200px] px-48'>
            <div className='pb-8'>
                <h3 className="text-[45px] font-semibold">Hi, I am</h3>
                <h1 className="text-[85px] font-semibold my-5">Mary Hardy</h1>
                <p className="text-[#757575] text-lg">Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to
                    society behaved moments.</p>
                <button className="btn-custom mt-5">Download CV</button>
            </div>
            <div>
                <Image src="/hardy.png" width="1100" height="1000" />
            </div>
        </div>
    );
};

export default Banner;