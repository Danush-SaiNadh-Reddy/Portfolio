import React, { useState ,useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 
import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }; 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setNav(false);
      }
    }; 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='text-white flex justify-between items-center m-4 px-4 max-w-[1240px] mx-auto'>
      <h1 className='w-full text-5xl font-semibold text-[#00df9a]'>Portfolio</h1>

      <ul className='hidden md:flex'>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          <span className='p-4 hover:text-[#00df9a] hover:cursor-pointer transition-colors duration-300'>Home</span>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
          <span className='p-4 hover:text-[#00df9a] hover:cursor-pointer transition-colors duration-300'>About</span>
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
          <span className='p-4 hover:text-[#00df9a] hover:cursor-pointer transition-colors duration-300'>Projects</span>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>
          <span className='p-4 hover:text-[#00df9a] hover:cursor-pointer transition-colors duration-300'>Contact</span>
        </Link>
      </ul>

 
      <div onClick={handleNav} className='block md:hidden z-50'>
        {nav ? <AiOutlineClose size={25} className="text-[#00df9a]"/> : <AiOutlineMenu size={25} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] sm:w-[40%] h-full bg-[#000300] p-8 ease-in-out duration-500 z-40' : 'fixed left-[-100%] top-0 p-8 h-full ease-in-out duration-500 z-40'}>
        <h1 className='w-full text-4xl font-semibold text-[#00df9a] mb-10'>Portfolio</h1>
        <ul className='uppercase flex flex-col gap-6 text-lg'>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav}>
            <span className='p-4 border-b border-gray-600 hover:text-[#00df9a] hover:cursor-pointer transition-colors duration-300'>Home</span>
          </Link> 
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={handleNav}>
            <span className='p-4 border-b border-gray-600 hover:text-[#00df9a] hover:cursor-pointer transition-colors duration-300'>About</span>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} onClick={handleNav}>
            <span className='p-4 border-b border-gray-600 hover:text-[#00df9a] hover:cursor-pointer transition-colors duration-300'>Projects</span>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={handleNav}>
            <span className='p-4 hover:text-[#00df9a] hover:cursor-pointer transition-colors duration-300'>Contact</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
