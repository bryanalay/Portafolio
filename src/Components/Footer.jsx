import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getUTCFullYear();

  return (
    <footer className="flex h-auto py-12 bg-gray-100 dark:bg-gray-800 justify-center items-center">
      <div className="grid grid-rows-3 p-8 sm:flex h-full w-full items-center justify-center gap-8 sm:gap-32 text-gray-900 dark:text-white">
        <ul className="row-span-1">
          <li className="font-bold">Paginas</li>
          <li>
            <Link to={'/'}>Inicio</Link>            
          </li>
          <li>
            <Link to={'/projects'}>Proyectos</Link>
          </li>
        </ul>
        <ul className="row-span-1">
          <li>
            <a className="font-bold decoration-slice" href="/contact">
              Contacto
            </a>
          </li>
          <li>
            <a className="" href="mailTo:bryanalmi27@hotmail.com">
              Mail
            </a>
          </li>
          <li><a href="https://www.linkedin.com/in/bryan-alay-miranda/" target='_blank' rel="noreferrer">LinkedIn</a></li>
        </ul>
        
        <p className="text-sm text-white">
          &copy; {year} AlmiDev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
