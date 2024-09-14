import React from 'react';

const Boton = ({ texto, isOpen, isDarkMode, img }) => {
  return (
    <button
      className={`relative flex items-center justify-center rounded-full border-2 p-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} ${isOpen ? 'opacity-100 z-30' : 'opacity-0 z-10 pointer-events-none'} w-full md:w-auto`}
    >
      <div className="absolute left-2 flex items-center">
        {img}
      </div>
      <span className="ml-10 md:ml-8 text-sm md:text-base">{texto}</span>
    </button>
  );
};

export default Boton;
