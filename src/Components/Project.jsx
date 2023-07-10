import Icons from "./Icons";

const Project = ({proj}) => {
  const { img, title, link, gh, icons} = proj
  const img2 = "https://i.imgur.com/Rz70xAj.png";
  return (
    <div className="grid gap-2 bg-stone-300 p-5 rounded-2xl">
      <img className="rounded-2xl w-[350px] h-[200px]" src={img} alt="pj" />
      <h2>{title}</h2>
      <a href={gh}>Github</a>
      <a href={link}>App</a>
      <div className="gap-4">
        <h1>Tecnologias:</h1>
        <Icons arricons={icons}/>
        {/* <ul className="flex mt-2 gap-5">
          <li>
            <img className="rounded-full w-9 h-9 border-black border-[1px] shadow-2lg" src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png" alt="icono1" />
          </li>
          <li>
            <img className="rounded-full w-9 h-9 border-black border-[1px] shadow-2lg" src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" alt="icono1" />
          </li>
          <li>
            <img className="rounded-full w-9 h-9 border-black border-[1px] shadow-2lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="icono1" />
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Project;
