const Icon = ({icon}) => {
    const { src, alter } = icon
  return (
    <li>
      <img
        className="rounded-full w-9 h-9 border-black border-[1px] shadow-2lg"
        src={src}
        alt={alter}
      />
    </li>
  );
};

export default Icon;
