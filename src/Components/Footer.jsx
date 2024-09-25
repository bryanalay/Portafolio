
const Footer = () => {
  return (
    <footer className="flex h-auto sm:py-10 bg-slate-600 justify-center items-center">
      <div className="grid grid-rows-3 p-5 sm:flex h-full w-full items-center justify-center gap-5 sm:gap-52 text-white">
        <ul className="row-span-1">
          <li className="font-bold">Pages</li>
          <li>
            <a className="" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="" href="/contact">
              Contact
            </a>
          </li>
        </ul>
        <ul className="row-span-1">
          <li>
            <a className="font-bold decoration-slice" href="/contact">
              Contact
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
          &copy; 2023 AlmiDev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
