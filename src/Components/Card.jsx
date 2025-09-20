import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="sm:w-[380px] md:w-[500px] sm:rounded-lg lg:w-[600px] sm:border border-platinum-400 dark:border-hookers_green-400 sm:h-96 bg-platinum-900 dark:bg-dark_green flex justify-center items-center">
      <div className="mx-12 mt-12 mb-12">
        <div className="w-full h-full space-y-4">
          <h1 className="text-xl font-semibold text-hookers_green-200 dark:text-platinum-900">Fullstack web developer</h1>
          <p className="text-cambridge_blue-400 dark:text-platinum-700 leading-relaxed">
          Especializado en el stack PERN: PostgreSQL, Express, React, Node.js
          <br /> ir a
          <Link to={"/projects"}>
          <span className="hover:text-mint dark:hover:text-mint-600 font-medium text-hookers_green-200 dark:text-platinum-900"> proyectos</span>.
          </Link>
            <br /> Con conocimientos de typescript, python, flutter, java, c#.
            <br /> Interes en IOT y modelos de machine learning.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <img
                className="w-10"
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_logo_icon_146389.png"
                alt="POSTGRE"
              />
            </li>
            <li>
              <img
                className="rounded-full w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png"
                alt="EXPRESS"
              />
            </li>
            <li>
              <img
                className="w-10"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="REACT"
              />
            </li>
            <li>
              <img
                className="w-10"
                src="https://images.icon-icons.com/2415/PNG/512/nodejs_original_logo_icon_146411.png"
                alt="NODEJS"
              />
            </li>
          </ul>
          <ul className="flex items-center gap-6 space-y-0">
          <li>
              <img
                className="rounded-full w-10"
                src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_python_icon_130221.png"
                alt="PY"
              />
            </li>
            <li>
              <img
                className="rounded-full w-10"
                src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png"
                alt="FLUTTER"
              />
            </li>
            <li>
              <img
                className="rounded-full w-10"
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_logo_icon_146458.png"
                alt="JAVA"
              />
            </li>
            <li>
              <img
                className="w-10"
                src="https://cdn.icon-icons.com/icons2/2148/PNG/512/c_icon_132529.png"
                alt="C#"
              />
            </li>
            <li>
              <img
                className="w-10"
                src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
                alt="TW"
              />
            </li>
            <li>
              <img
                className="w-10"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/arduino_official_logo_icon_167833.png"
                alt="ARDUINO"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
