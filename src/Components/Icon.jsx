const Icon = ({ icon }) => {
  const { src, alter } = icon
  return (
    <li>
      <img
        className="w-9 h-9 shadow-2lg"
        src={src}
        alt={alter}
      />
    </li>
  )
}

export default Icon
