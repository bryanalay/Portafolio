import { Link } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from './DarkModeToggle';

const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false)

  return (
    <>
      <nav className="w-full h-[60px] fixed top-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-between py-4 px-6 sm:justify-center z-10 border-b border-gray-200 dark:border-gray-700">
      <button className="sm:hidden inline-block rounded-sm p-2 h-10 w-10 flex flex-col justify-center items-center space-y-1" onClick={()=>{setIsOpen(!isOpen)}}>
        <div className="w-6 h-0.5 bg-gray-900 dark:bg-white"></div>
        <div className="w-6 h-0.5 bg-gray-900 dark:bg-white"></div>
        <div className="w-6 h-0.5 bg-gray-900 dark:bg-white"></div>
      </button>
      <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-5 sm:left-0"><img src="https://i.imgur.com/YjKkmgp.png" alt="almilogo" width={'65'} /></div>
      <ul className="sm:flex hidden ml-auto items-center">
        <li className="px-8">
          <Link to={"/"}>Inicio</Link>
        </li>
        <li className="px-8">
          <Link to={"/projects"}>Proyectos</Link>
        </li>
        <li className="px-8">
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
    <div className={` fixed left-0 w-full sm:w-[250px] bg-white dark:bg-gray-900 text-gray-900 dark:text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-20 top-[60px] border-r border-gray-200 dark:border-gray-700`}>
        <ul className="p-4">
          <li className="py-2"><Link to={"/"}>Inicio</Link></li>
          <li className="py-2"><Link to={"/projects"}>Proyectos</Link></li>
          {/* Agrega más enlaces o contenido aquí */}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
