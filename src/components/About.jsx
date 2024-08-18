import React from 'react'
import { useState } from 'react'
const About = () => {
    const [skill, SetSkill] = useState(true);
    const [experience, SetExperience] = useState(false);
    const [education, SetEducation] = useState(false);

    const hs = () => {
        SetExperience(false);
        SetEducation(false);
        SetSkill(true);
    }
    const hexp = () => {
        SetExperience(true);
        SetEducation(false);
        SetSkill(false);
    }
    const hedu = () => {
        SetExperience(false);
        SetEducation(true);
        SetSkill(false);
    }

    return (
        <div className='text-white' id='about'>
            <div className='text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl ml-4 mt-[-96px] pb-8'>About Me</div>
            <div className='md:max-w-[1000px] sm:max-w-[600px] max-w-[400px]  w-full mx-auto mb-2 bg-gray-800 rounded-3xl p-6'>
                <p className='md:text-lg sm:text-base text-sm'>Hello! I'm Danush Sainadh Reddy Dumpa, a passionate and dedicated software developer with a robust background in both front-end and back-end technologies. Currently, I’m pursuing my final year of B.Tech in Civil Engineering at the National Institute of Technology Calicut.<br/><br/>During my time at NIT Calicut, I was an active member of the RIG club, where I collaborated with like-minded individuals on various innovative projects, further honing my technical skills and fostering a strong sense of teamwork and leadership<br/><br/>I interned at Accenture as an Advanced Application Analyst, where I developed a resource management system, focusing on scalable, efficient solutions and maintaining high code quality. My journey includes contributions to various web applications and software projects, driven by a passion for transforming ideas into impactful, clean, and efficient code.<br/><br/>I’m eager to explore new opportunities where I can continue to grow and contribute. If you’re looking for a motivated individual ready to tackle challenges and innovate, I’d love to connect and discuss how I can add value to your team<br/><br/></p>
            </div>

            <div className='max-w-[1000px] bg-gray-800 rounded-3xl mx-auto my-8 py-3 grid grid-cols-3 items-center justify-center'>
                <button className={skill ?'text-2xl text-center text-[#00df9a]':'text-center text-lg'} onClick={hs}>Skills</button>
                <button className={experience ?'text-2xl text-center text-[#00df9a]':'text-center text-lg'} onClick={hexp}>Experience</button>
                <button className={education?'text-2xl text-center text-[#00df9a]':'text-center text-lg'} onClick={hedu}>Education</button>
            </div>

            <div className={skill ? 'mx-auto max-w-[1000px] py-1' : 'hidden'}>
                <ul className='list-outside list-disc'>
                    <li className='md:text-lg  text-base px-2  py-1'><span className='text-[#00df9a]'>Programming Languages</span> - C++, C, Java, SQL, Python</li>
                    <li className='md:text-lg  text-base px-2  py-1'><span className='text-[#00df9a]'>Web development</span> - HTML, CSS, React,Javascript, Nodejs,Expressjs,TailWind CSS</li>
                    <li className='md:text-lg  text-base px-2  py-1'><span className='text-[#00df9a]'>Database Management Systems</span> - MYSQL, MongoDB</li>
                    <li className='md:text-lg  text-base px-2  py-1'><span className='text-[#00df9a]'>Version Control Systems</span> - Git</li>
                    <li className='md:text-lg  text-base px-2  py-1'><span className='text-[#00df9a]'>Operating Systems</span> - Windows, Linux</li>
                </ul>
            </div>

            <div className={experience ? 'mx-auto max-w-[1000px] py-1 ' : 'hidden'}>
                <div className='grid grid-cols-3 gap-x-8 items-center justify-center pb-5 md:px-1 px-4'>
                    <h1 className='text-left text-[#00df9a] text-bold md:text-xl sm:text-lg text-base'>Accenture</h1>
                    <h1 className='text-center text-bold md:text-xl sm:text-lg text-base'>Advance Application Analyst</h1>
                    <h1 className='text-right  text-bold md:text-xl sm:text-lg text-base'>May,2024-July,2024</h1>
                </div>
                <div className='border-t pt-1 pb-4 list-outside md:px-1 pl-6'>
                    <ul className='list-outside list-disc'>
                        <li className='md:text-lg text-base px-2  py-1'>Training on basics of AWS, S3, EC2, Automation using blueprism.</li>
                        <li className='md:text-lg   text-base px-2  py-1'>Developed a Resource Management System (RMS) using React.js, TailwindCSS, JSON Server</li>
                        <li className='md:text-lg   text-base px-2  py-1'>It is a Dynamic website in which allocation of new project to an Employee is done based on the criteria that total percentage
                            never exceeds 100%</li>
                        <li className='md:text-lg   text-base px-2  py-1'>Implemented features like Employee Allocation, Searching and Deletion .</li>
                    </ul>
                </div>

            </div>

            <div className={education ? 'mx-auto max-w-[1000px] py-1 ' : 'hidden'}>
                <div className='grid grid-cols-3 gap-x-8 gap-y-4 items-center justify-center md:px-1 px-4'>
                    <h1 className='text-left text-[#00df9a] md:text-base text-base px-2 pt-1'>2021-2025</h1>
                    <h1 className='text-center text-[#00df9a] md:text-base text-base px-2 py-1'>Branch</h1>
                    <h1 className='text-right text-[#00df9a] md:text-base text-base px-2 py-1'>CGPA</h1>
                    <p className='text-left md:text-base text-base px-2 py-1'>National Institute of Technology, Calicut<br />B-Tech</p>
                    <p className='text-center md:text-base text-base px-2 py-1'>Civil Engineering</p>
                    <h1 className='text-right md:text-base text-base px-2 py-1'>8.57</h1>
                    <p className='text-left md:text-base text-base px-2 py-2'><span className='text-[#00df9a]'>2019-2021</span><br />Tirumala college<br />Secondary High School</p>
                    <h1 className='text-center md:text-base text-base px-2 py-1'>MPC</h1>
                    <h1 className='text-right md:text-base text-base px-2 py-1'>94.9%</h1>
                    <p className='text-left  md:text-base text-base px-2 py-2'><span className='text-[#00df9a]'>2018-2019</span><br />St Ann's School<br />Secondary High School</p>
                    <h1 className='text-center md:text-base text-base px-2 py-1'>ICSE</h1>
                    <h1 className='text-right md:text-base text-base px-2 py-1'>88%</h1>
                </div>
            </div>

        </div>
    )
}

export default About