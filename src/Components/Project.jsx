import Icons from "./Icons";

const Project = ({proj}) => {
  const { img, title, link, gh, icons} = proj
  return (
    <div className="grid gap-2 bg-stone-100 border-black border-[1px] p-5  rounded-2xl">
      <img className="rounded-2xl w-[350px] h-[200px]" src={img} alt="pj" />
      <h2>{title}</h2>
      Github: <a href={gh} rel="noreferrer" target="_blank">{gh}</a>
      App: <a href={link} rel="noreferrer" target="_blank">{link}</a>
      <div className="gap-4">
        <h1>Tecnologias:</h1>
        <Icons arricons={icons}/>        
      </div>
    </div>
  );
};

export default Project;
