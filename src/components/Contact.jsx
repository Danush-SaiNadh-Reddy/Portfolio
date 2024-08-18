import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa"; 

const Contact = () => {
  return (
    <div className='text-white' id='contact'>
      <div className='text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl ml-4 mt-8 pb-8'>Contact</div>
      <div className="flex flex-col  ml-6 pb-8">
        <div className="flex text-xl items-center gap-2 p-2  hover:cursor-pointer">
          <FaPhoneAlt size={20} />
          <span className='hover:text-[#00df9a]'>8978207381</span>
        </div>

        <a href="mailto:danushdumpa2003@gmail.com" className="flex text-xl items-center gap-2 p-2  hover:cursor-pointer">
          <MdEmail size={20} />
          <span className='hover:text-[#00df9a]'>danushdumpa2003@gmail.com</span>
        </a>

        <a href="https://www.linkedin.com/in/danush-reddy-117490227/" className="flex text-xl items-center gap-2 p-2  hover:cursor-pointer">
          <FaLinkedin size={20} />
          <span className='hover:text-[#00df9a]'>LinkedIn</span>
        </a>

        <a href="https://github.com/Danush-SaiNadh-Reddy"  className="flex text-xl items-center gap-2 p-2  hover:cursor-pointer">
          <FaGithub size={20} />
          <span className='hover:text-[#00df9a]'>Github</span>
        </a>
      </div>


    </div>
  )
}

export default Contact