import React, { useRef, useState } from 'react'
import "../styles/Navbar.css";
import { IoMdNotificationsOutline } from "react-icons/io"
import {GrClose} from "react-icons/gr"
import {HiOutlineBars3} from "react-icons/hi2"
import { GoOctoface } from 'react-icons/go'
import { NavLink, Link } from "react-router-dom"
const img = require("../assests/logo.png");

const Navbar = () => {
  const navref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    const classlist = navref.current.classList;
    if (isOpen === false) {
      classlist.add('menuactive');
    }
    if (isOpen === true) {
      classlist.remove('menuactive');
    }
    setIsOpen(!isOpen);
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="Nav bg-[white] sticky max-h-16 z-50">
      <div className="qNav flex items-center justify-around">
        <Link to="/">
          <div className="qNav_logo w-14 py-1">
            <img
              src={img}
              alt="clg_logo"
            />
          </div>
        </Link>
        <div ref={navref} className="qNav_icons flex md:flex-row md:static md:gap-0 gap-4 items-center md:w-auto md:bg-[white] absolute flex-col duration-500 top-[-250%] w-[100%] bg-[#f8f8f8] ">
          <NavLink
            to="/"
          >
            <div className="qNav_icon">
              <div className="svgIcon hover:bg-[#f1f0f0] hover:rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <g class="icon_svg-fill_as_stroke">
                    <path
                      d="M0.308058262,12.0580583 L0.245478344,12.130247 C-0.051901591,12.5286585 0.225938323,13.125 0.75,13.125 L3.875,13.125 L3.875,22.5 C3.875,22.845178 4.15482203,23.125 4.5,23.125 L9.5,23.125 C9.84517797,23.125 10.125,22.845178 10.125,22.5 L10.125,17.5 C10.125,16.4644661 10.9644661,15.625 12,15.625 C13.0355339,15.625 13.875,16.4644661 13.875,17.5 L13.875,22.5 C13.875,22.845178 14.154822,23.125 14.5,23.125 L19.5,23.125 L19.5923579,23.1182234 C19.8937421,23.0735831 20.125,22.8137982 20.125,22.5 L20.125,13.125 L23.25,13.125 C23.8068155,13.125 24.0856698,12.4517863 23.6919417,12.0580583 L12.4419417,0.808058262 C12.1978641,0.563980579 11.8021359,0.563980579 11.5580583,0.808058262 L0.308058262,12.0580583 Z M12,2.133 L21.742,11.875 L19.5,11.875 L19.4076421,11.8817766 C19.1062579,11.9264169 18.875,12.1862018 18.875,12.5 L18.875,21.875 L15.125,21.875 L15.125,17.5 C15.125,15.7741102 13.7258898,14.375 12,14.375 L11.8226693,14.3799469 C10.1792834,14.4718789 8.875,15.8336236 8.875,17.5 L8.875,21.875 L5.125,21.875 L5.125,12.5 L5.1182234,12.4076421 C5.07358314,12.1062579 4.81379815,11.875 4.5,11.875 L2.257,11.875 L12,2.133 Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/answers"
          >
            <div className="qNav_icon">
              <div className="svgIcon hover:bg-[#f1f0f0] hover:rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="icon_svg-fill_as_stroke"
                    d="M20.582 1.469c.951.255 1.694.998 1.949 1.949.238.888.017 1.831-.58 2.519l-.134.143L7.594 20.299c-.039.039-.082.072-.129.099l-.073.036-1.238.514.006.006-.1.033-3.82 1.59c-.247.103-.495.037-.662-.116l-.058.019.019-.058c-.134-.146-.201-.354-.147-.569l.031-.093 1.592-3.831.031-.089.005.005.515-1.237c.021-.05.048-.098.081-.141l.054-.061L17.92 2.182c.696-.696 1.711-.968 2.662-.713zm.918 8.406c.314 0 .574.231.618.533l.007.092v11c0 .314-.231.574-.533.618l-.092.007h-11c-.345 0-.625-.28-.625-.625 0-.314.231-.574.533-.618l.092-.007h10.375V10.5c0-.314.231-.574.533-.618l.092-.007zm-2.577-6.916l-.119.107L4.673 17.201l-.666 1.6 1.19 1.19 1.601-.665 14.136-14.13c.304-.304.46-.72.439-1.14l-.016-.158-.033-.157c-.139-.52-.545-.926-1.065-1.065-.468-.125-.964-.018-1.335.283zM13.5 1.875c.345 0 .625.28.625.625 0 .314-.231.574-.533.618l-.092.007H3.124L3.125 13.5c0 .314-.231.574-.533.618l-.092.007c-.314 0-.574-.231-.618-.533l-.007-.092v-11c0-.314.231-.574.533-.618l.092-.007h11z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/notifications"
          >
            <div className="svgIcon hover:bg-[#f1f0f0] hover:rounded-lg px-4 py-0.5">
              <IoMdNotificationsOutline className='notispecial text-3xl text-[#7c7c7c]' />
            </div>
          </NavLink>
        </div>

        <div className="qNav_morebtns flex items-center space-x-4">
          <div className="profile">
            <GoOctoface className='text-2xl cursor-pointer text-[#252424]' />
          </div>
          <div>
            <button class="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">
              Add Question
            </button>
          </div>
        </div>
        <div className=' md:hidden'>
          {
            !menuOpen ? <HiOutlineBars3 className=' cursor-pointer text-3xl' onClick={handleClick}/> : <GrClose className=' cursor-pointer text-2xl' onClick={handleClick}/>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar