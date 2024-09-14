import { motion, useAnimationControls } from 'framer-motion';
import { useState, useEffect } from 'react';
import Boton from './botones';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { HiArrowSmLeft } from "react-icons/hi";
import { LuMusic } from "react-icons/lu";
import { BsRobot } from "react-icons/bs";
import { FaFolderOpen, FaHome } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { IoVideocam } from "react-icons/io5";

const containerVariants = (isSmallScreen) => ({
  close: {
    left: isSmallScreen ? '-100%' : '-16rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    left:  isSmallScreen? '0rem' : '0rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
});

const Main = ({ func, isOpen, isDarkMode, toggleTheme }) => {
  const containerControls = useAnimationControls();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    containerControls.start(isOpen ? 'open' : 'close');
  }, [isOpen, containerControls]);

  return (
    <motion.div
      className={`h-screen absolute top-0 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} ${isOpen ? 'z-30' : 'z-20'}`}
      variants={containerVariants(isSmallScreen)}
      animate={containerControls}
      initial="close"
      style={{ position: 'fixed', width: isSmallScreen ? '100%' : '16rem' }}
    >
      <div className="flex flex-col h-full p-4">
        <div className='flex justify-between mb-4'>
          <button
            className={`flex items-center justify-center rounded-full border-2 p-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} ${isOpen ? 'opacity-100 z-30' : 'opacity-0 z-20 pointer-events-none'}`}
            onClick={func}
          >
            <HiArrowSmLeft />
          </button>
          <button
            className={`flex items-center justify-center rounded-full border-2 p-2 ${isDarkMode ? 'bg-blue-800 text-white hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} ${isOpen ? 'opacity-100 z-30' : 'opacity-0 z-20 pointer-events-none'}`}
            onClick={toggleTheme}
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
        <h1 className='flex items-center justify-center font-bold text-2xl mb-4'>Herramientas</h1>
        <hr className='border-t-4 mb-4' />
        <div className="flex flex-col flex-grow gap-4">
          <Boton img={<FaFolderOpen />} isOpen={isOpen} texto="Archivos" isDarkMode={isDarkMode} />
          <Boton img={<BsRobot />} isOpen={isOpen} texto="Inteligencia Artificial" isDarkMode={isDarkMode} />
          <Boton img={<LuMusic />} isOpen={isOpen} texto="Música" isDarkMode={isDarkMode} />
          <Boton img={<RxLapTimer />} isOpen={isOpen} texto="Temporizador" isDarkMode={isDarkMode} />
          <Boton img={<IoVideocam />} isOpen={isOpen} texto="Video Conferencia" isDarkMode={isDarkMode} />
        </div>
        <hr className='border-t-4 mt-auto' />
        <div className="flex items-center justify-center mt-4">
          <button
            className={`rounded-full border-2 p-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} ${isOpen ? 'opacity-100 z-30' : 'opacity-0 z-20 pointer-events-none'}`}
          >
            <FaHome />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
