import React, { useRef, useState } from 'react'
import "../styles/Navbar.css";
import { AiOutlineProfile } from 'react-icons/ai';
import { GrHomeRounded } from 'react-icons/gr'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { NavLink } from "react-router-dom"
const img = require("../assests/logo.png");
const Navbar = () => {
  const navref = useRef();
  const [isOpen, setIsOpen] = useState(false);
 
  const handleClick = () => {
    const classlist = navref.current.classList;
    if (isOpen === false) {
      classlist.add('top-[12%]');
    }
    if (isOpen === true) {
      classlist.remove('top-[12%]');
    }
    setIsOpen(!isOpen);
  }
  return (
    <nav className='bg-[white] shadow-md  h-16 flex md:justify-around justify-between items-center mx-auto'>
      <div className='ml-8'>
        <img className='w-12' src={img} alt="Clg_logo" />
      </div>
      <div ref={navref} className='md:static absolute duration-500 md:min-h-fit min-h-[40vh] w-full md:w-auto left-0 top-[-100%] bg-white px-5'>
        <ul className='flex md:flex-row flex-col bg-white md:items-center md:gap-[4vw] gap-6'>
          <li className='flex items-center gap-2'>
            <GrHomeRounded className='text-xl' />
            <NavLink to={'/'}>
              <span className='cc text-base font-medium hover:text-[#b12d2d] hover:border-b-2 hover:border-[#b12020]'>Home</span>
            </NavLink>
          </li>
          <li className='flex items-center gap-2'>
            <AiOutlineProfile className='text-2xl' />
            <NavLink to={'/profile'}>
              <span className='text-base font-medium  hover:text-[#b12d2d] hover:border-b-2 hover:border-[#b12020]'>Profile</span>
            </NavLink>
          </li>
          <li className='flex items-center gap-2'>
            <IoIosNotificationsOutline className='text-2xl' />
            <NavLink to={'/Notifi'}>
              <span className='text-lg font-medium  hover:text-[#b12d2d] hover:border-b-2 hover:border-[#b12020]'>Notifications</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <div className='flex items-center gap-8 mr-10'>
          <button className='bg-[#b92b27] text-white px-5 py-2 rounded-full hover:bg-[#9c100c]'>Add question</button>
          {isOpen ?
            <i className="icon ion-md-close pl-1.5 md:hidden text-3xl cursor-pointer" onClick={handleClick}></i>
            :
            <i className="icon ion-md-menu md:hidden text-3xl cursor-pointer" onClick={handleClick}></i>
          }        </div>
      </div>
    </nav>
  )
}

export default Navbar