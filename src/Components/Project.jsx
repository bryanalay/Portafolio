import Icons from "./Icons";

const Project = ({proj}) => {
  const { img, title, link, gh, icons} = proj
  return (
    <div className="grid gap-2 bg-stone-100 border-black border-[1px] p-5 font-semibold rounded-2xl">
      <img className="rounded-2xl h-auto w-auto sm:w-[385.42px] sm:h-[125px] " src={img} alt="pj"/>
      <h2 className="font-extrabold">{title}</h2>
      Github: <a className="break-words overflow-auto font-thin hover:text-blue-700" href={gh} rel="noreferrer" target="_blank">{gh}</a>
      App: <a className="break-words overflow-auto font-thin hover:text-blue-700" href={link} rel="noreferrer" target="_blank">{link}</a>
      <div className="gap-4">
        <h1 className="font-semibold">Tecnologias:</h1>
        <Icons arricons={icons}/>        
      </div>
    </div>
  );
};

export default Project;
