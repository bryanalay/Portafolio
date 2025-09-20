import Item from './Item'

const Items = ({array}) => {
  return (
    <ul className="h-12 flex items-center justify-center gap-6">
        {array.map((item,index)=>(
            <Item key={index} item={item}/>
        ))}
    </ul>
  )
}

export default Items