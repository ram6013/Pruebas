import { useState } from 'react';
import './App.css';
import SideBar from './componentes/SideBar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`relative h-screen w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-400'}`}>
      <header className={`flex justify-center items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-700'}`}>
        <h1 className={`text-2xl p-4 md:text-5xl ${isDarkMode ? 'text-white' : 'text-black'}`}>Sala de estudio</h1>
      </header>
      <SideBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
