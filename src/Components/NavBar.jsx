import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full h-[60px] fixed top-0 bg-slate-600 text-white flex py-2 px-4 justify-center sm:justify-between z-10 items-center">
      <div className="px-5">Icono</div>
      <ul className="sm:flex hidden">
        <li className="px-5">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="px-5">
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li className="px-5">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="px-5">
          <Link to={"/exp"}>Example</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
