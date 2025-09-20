import Icons from "./Icons";

const Project = ({proj}) => {
  const { img, title, link, gh, icons} = proj
  return (
    <div className="grid gap-2 bg-platinum-800 dark:bg-hookers_green-400 border-dark_green dark:border-platinum-400 border-[1px] p-5 font-semibold rounded-2xl">
      <img className="rounded-2xl h-auto w-auto sm:w-[385.42px] sm:h-auto " src={img} alt="pj"/>
      <h2 className="font-extrabold text-hookers_green-200 dark:text-platinum-900">{title}</h2>
      Github: <a className="break-words overflow-auto font-thin hover:text-mint dark:hover:text-mint-600 text-cambridge_blue-400 dark:text-platinum-700" href={gh} rel="noreferrer" target="_blank">{gh}</a>
      App: <a className="break-words overflow-auto font-thin hover:text-mint dark:hover:text-mint-600 text-cambridge_blue-400 dark:text-platinum-700" href={link} rel="noreferrer" target="_blank">{link}</a>
      <div className="gap-4">
        <h1 className="font-semibold text-hookers_green-200 dark:text-platinum-900">Tecnologias:</h1>
        <Icons arricons={icons}/>        
      </div>
    </div>
  );
};

export default Project;
