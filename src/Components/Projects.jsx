import Project from "./Project"

const Projects = ({projs}) => {
  return (
    <div className="grid sm:grid-cols-3 gap-5">
        {projs.map((proj, index)=>(
            <Project key={index} proj={proj}/>
        ))}
    </div>
  )
}

export default Projects