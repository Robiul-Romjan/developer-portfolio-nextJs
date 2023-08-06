import MainLayout from "@/layouts/MainLayout";
import Image from 'next/image';

const about = () => {
    return (
        <MainLayout>
            <div className='bg-[#FFF8F3] px-[80px] rounded pt-12'>
                <h2 className='text-[35px] font-bold text-center'>About Me</h2>
                <div className="grid grid-cols-2 gap-5 mt-8">
                    <div className="mt-4">
                        <Image src="/mypic.jpg" width="800" height="800" />
                    </div>
                    <div>
                        <h2 className='text-[25px] font-semibold'>I am Robiul and I am a MERN Stack Developer.</h2>
                        <p>Hello, I am a Software Developer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company organizational needs, highlight their core competencies, and further their success.Skilled in Web Design and Developing, using HTMl, CSS, JavaScript, Bootstrap, React and also using little bit Node.js. A strong business development professional with also a learner of Bachelors degree focused in Computer Science from University of Scholars.!</p>
                        <div className='mt-8'>
                            <button className='btn-custom'> Download CV </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-8 pb-8">
                    <div className="text-center">
                        <p className="text-[#757575] text-xl">Name:</p>
                        <p className="text-xl font-semibold">Robiul Alam Romjan</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[#757575] text-xl">Email:</p>
                        <p className="text-xl font-semibold">robiulromjan.ius@gmail.com</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[#757575] text-xl">Specialty:</p>
                        <p className="text-xl font-semibold">Web Dev</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[#757575] text-xl">Location:</p>
                        <p className="text-xl font-semibold">Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default about;