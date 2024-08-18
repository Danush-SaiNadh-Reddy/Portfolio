import React from 'react';
import {ReactTyped} from 'react-typed'; 
import { IoMdCloudDownload } from "react-icons/io";
const Hero = () => {
    return (
        <div className='text-white' id='hero'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] text-l'>B-tech student at NIT Calicut</p>
                <div className='md:text-5xl sm:text-4xl text-3xl font-bold p-2'>
                   <h1 className='px-4 pb-4 '>Hi, I'm </h1>
                    <ReactTyped strings={[' Danush Sainadh Reddy Dumpa']} 
                    typeSpeed={120} 
                    backSpeed={140}
                    loop/>
                </div> 
                <p className='md:text-base text-sm font-semibold pt-2 text-gray-500'>I'm a student with a strong foundation in programming logic and leadership skills. Passionate about technologies and coding, I am eager to develop my communication skills, creativity, and knowledge</p>
                <a href="/Portfolio/resume.pdf" download="resume.pdf" className='bg-[#00df9a] flex items-center justify-evenly text-black rounded-lg w-[180px] py-2 text-center font-medium mx-auto my-5 hover:cursor-pointer'>Download My CV <IoMdCloudDownload size={25}/></a> 
                
            </div>





        </div>
    )
}

export default Hero