import React, { useState } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import Main from './main';

const SideBar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="top-0 left-0 absolute ">
      <button
        className={`hover:bg-blue-800 mt-4 ml-3 border-2 rounded-full hover:bg-white hover:text-black p-2 bg-black text-white ${
          isOpen ? 'opacity-0 pointer-events-none z-10' : 'opacity-100 z-30'
        }`}
        onClick={handleOpen}
      >
        <HiArrowSmRight />
      </button>
      <Main 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        func={handleOpen} 
        isOpen={isOpen} 
      />
    </div>
  );
};

export default SideBar;
