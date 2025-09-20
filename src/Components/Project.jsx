import Icons from "./Icons";

const Project = ({proj}) => {
  const { img, title, link, gh, icons} = proj
  return (
    <div className="grid gap-2 bg-stone-100 dark:bg-stone-700 border-black dark:border-gray-600 border-[1px] p-5 font-semibold rounded-2xl">
      <img className="rounded-2xl h-auto w-auto sm:w-[385.42px] sm:h-auto " src={img} alt="pj"/>
      <h2 className="font-extrabold text-gray-900 dark:text-white">{title}</h2>
      Github: <a className="break-words overflow-auto font-thin hover:text-blue-700 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300" href={gh} rel="noreferrer" target="_blank">{gh}</a>
      App: <a className="break-words overflow-auto font-thin hover:text-blue-700 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300" href={link} rel="noreferrer" target="_blank">{link}</a>
      <div className="gap-4">
        <h1 className="font-semibold text-gray-900 dark:text-white">Tecnologias:</h1>
        <Icons arricons={icons}/>        
      </div>
    </div>
  );
};

export default Project;
