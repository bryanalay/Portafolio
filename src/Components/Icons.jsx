import Icon from "./Icon"

const Icons = ({arricons}) => {
    return(
        <ul className="flex mt-2 gap-5">
            {arricons.map((icon, index)=>(<Icon key={index} icon={icon}/>))}
        </ul>
    )
    
}

export default Icons