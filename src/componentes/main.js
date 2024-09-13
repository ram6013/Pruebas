import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import Boton from './botones';

const containerVariants = {
  close: {
    width: '0rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: '16rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
};

const Main = ({ func, isOpen }) => {
  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start('open');
    } else {
      containerControls.start('close');
    }
  }, [isOpen, containerControls]);

  return (
    <motion.div
      className="h-screen bg-white absolute top-0 left-0"
      variants={containerVariants}
      animate={containerControls}
      initial="close"
    >
      <div className="grid grid-cols-1 gap-4 p-4">
        <button
          className={`rounded-full border-2 p-2    bg-black text-white ${
            isOpen ? 'opacity-100 z-30' : 'opacity-0 z-10 pointer-events-none'
          }`}
          onClick={func}
        >
          Cerrar
        </button>
        <Boton isOpen={isOpen} texto={"Conversaciones"}></Boton>
        <Boton isOpen={isOpen} texto={"IA"}></Boton>
        <Boton isOpen={isOpen} texto={"Chats"}></Boton>
        
      </div>
    </motion.div>
  );
};

export default Main;
