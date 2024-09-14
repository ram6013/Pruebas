import { motion, useAnimationControls } from 'framer-motion';
import { useState, useEffect } from 'react';
import Boton from './botones';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { HiArrowSmLeft } from "react-icons/hi";
import { LuMusic } from "react-icons/lu";
import { BsRobot } from "react-icons/bs";
import { FaFolderOpen } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { IoVideocam } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const containerVariants = {
  close: {
    left: '-16rem', // Mueve el sidebar fuera de la pantalla
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    left: '0rem', // Mueve el sidebar hacia la vista
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
};

const Main = ({ func, isOpen }) => {
  const containerControls = useAnimationControls();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    containerControls.start(isOpen ? 'open' : 'close');
  }, [isOpen, containerControls]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <motion.div
      className={`h-screen absolute top-0 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} ${isOpen ? 'z-30' : 'z-20'}`}
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      style={{ position: 'fixed', left: 0, width: '16rem' }} // Asegura el tamaño y posición
    >
      <div className="grid grid-cols-1 gap-4 p-4">
        <div className='flex justify-between'>
        <button
          className={`flex items-center justify-center rounded-full border-2 p-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} ${isOpen ? 'opacity-100 z-30' : 'opacity-0 z-20 pointer-events-none'}`}
          onClick={func}
        >
          <HiArrowSmLeft />
        </button>
                {/* Botón para alternar tema */}
        <button
          className={`flex items-center justify-center rounded-full border-2 p-2 ${isDarkMode ? 'bg-blue-800 text-white hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} ${isOpen ? 'opacity-100 z-30' : 'opacity-0 z-20 pointer-events-none'}`}
          onClick={toggleTheme}
        >
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
        </div>
        {/*texto*/}
        <h1 className='flex items-center justify-center font-bold text-2xl'>Herramientas</h1>
        <hr className='border-t-4'></hr>
        {/* Botones */}
        <Boton img={<FaFolderOpen/>} isOpen={isOpen} texto="Archivos" isDarkMode={isDarkMode} />
        <Boton img={<BsRobot/>} isOpen={isOpen} texto="Inteligencia Artificial" isDarkMode={isDarkMode} />
        <Boton img={<LuMusic />} isOpen={isOpen} texto="Música" isDarkMode={isDarkMode} />
        <Boton img={<RxLapTimer/>} isOpen={isOpen} texto="Temporizador" isDarkMode={isDarkMode} />
        <Boton img={<IoVideocam />} isOpen={isOpen} texto="Video Conferencia" isDarkMode={isDarkMode} />

        
      </div>
      <div className="flex items-center justify-center">
  <button
    className={`rounded-full border-2 p-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} ${isOpen ? 'opacity-100 z-30' : 'opacity-0 z-20 pointer-events-none'}`}
  >
    <FaHome />
  </button>
</div>

    </motion.div>
  );
};

export default Main;
