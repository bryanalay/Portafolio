import React from "react";

const Item = ({ item }) => {
  const { link, img, id } = item;

  return (
    <li key={id}>
      <a href={link} target="_blank">
        <img
          className="rounded-full w-9 border-black border-[1px] shadow-2lg"
          src={img}
          alt="LNK"
        />
        {console.log("si me imprimi!!")}
      </a>
    </li>
  );
};

export default Item;
