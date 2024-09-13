import React from 'react'

const Boton =({texto, isOpen})=>{    
    return(
    <button
          className={`rounded-full border-2 p-2 hover:bg-black hover:text-white ${
            isOpen ? 'opacity-100 z-30' : 'opacity-0 z-10 pointer-events-none'
          }`}
        >
          {texto}
        </button>
        )
}

export default Boton;