import Item from './Item'

const Items = ({array}) => {
  return (
    <ul className="h-11 flex items-center justify-center gap-5">
        {array.map((item,index)=>(
            <Item key={index} item={item}/>
        ))}
    </ul>
  )
}

export default Items