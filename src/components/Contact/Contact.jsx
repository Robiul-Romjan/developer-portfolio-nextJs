import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div className='bg-[#FFF8F3] mx-[80px] rounded mt-20'>
            <div className='px-48 grid grid-cols-2 gap-8 py-28'>
                <div>
                    <h2 className='text-[35px] font-bold'>Let's Connect</h2>
                    <p className='text-lg text-[#757575] mt-8'>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
                    <div className='flex gap-3 mt-8'>
                        <Image src="/facebook.png" width="30" height="30" />
                        <Image src="/insta.png" width="30" height="30" />
                        <Image src="/twitter.png" width="30" height="30" />
                    </div>
                </div>
                <div>
                    <h2 className='text-[35px] font-bold'>Let Message me</h2>
                    <div className='mt-8'>
                        <input placeholder='Your Name' className='py-8 px-5 w-full' type="text" />
                        <input placeholder='Your Email' className='my-8 py-8 px-5 w-full' type="email" />
                        <textarea className='p-3 w-full' placeholder='Message' name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className='mt-8'>
                        <button className='btn-custom'> Submit </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;