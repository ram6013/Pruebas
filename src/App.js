import './App.css';
import SideBar from './componentes/SideBar';

function App() {
  return (
    <div className="relative h-screen w-full bg-gray-400">
      <header className="flex justify-center items-center bg-gray-700">
        <h1 className="text-5xl p-4">Sala de estudio</h1>
      </header>
      <SideBar />
    </div>
  );
}

export default App;
