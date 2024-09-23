import { Link } from "react-router-dom";
import bgline from '../assets/bgline.png'
import { useState } from "react";

const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false)

  return (
    <>
      <nav className="w-full h-[60px] fixed top-0 bg-slate-600 text-white flex items-center justify-between py-2 px-4 sm:justify-center z-10">
      <button className="sm:hidden inline-block rounded-sm p-2 h-10 w-10" style={{ backgroundImage: `url(${bgline})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      onClick={()=>{setIsOpen(!isOpen)}}></button>
      <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-5 sm:left-0">Icono</div>
      <ul className="sm:flex hidden ml-auto">
        <li className="px-5">
          <Link to={"/"}>Inicio</Link>
        </li>
        <li className="px-5">
          <Link to={"/projects"}>Projectos</Link>
        </li>
      </ul>
    </nav>
    <div className={` fixed left-0 w-full sm:w-[250px] bg-gray-800 text-white transform ${isOpen ? 'translate-y-0' : '-translate-y-full hidden'} transition-transform duration-300 z-20 top-[60px]`}>
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
