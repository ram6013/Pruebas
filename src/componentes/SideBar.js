import React, { useState } from 'react';
import Main from './main';

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="top-0 left-0 absolute ">
          <button
      className={`mt-4 ml-3 border-2 rounded-full hover:bg-white hover:text-black p-2 bg-black text-white ${
        isOpen ? 'opacity-0 pointer-events-none z-10' : 'opacity-100 z-30'
      }`}
      onClick={handleOpen}
    >
      Abrir
    </button>
      <Main func={handleOpen} isOpen={isOpen}></Main>
    </div>
  );
};

export default SideBar;
