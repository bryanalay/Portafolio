
const Item = ({ item }) => {
  const { link, img, id } = item;

  return (
    <li key={id}>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          className="rounded-full w-10"
          src={img}
          alt="LNK"
        />
      </a>
    </li>
  );
};

export default Item;
