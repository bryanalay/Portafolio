import React from "react";

const Card = () => {
  return (
    <div className="sm:w-[380px] md:[500px] h-full sm:rounded-2xl lg:w-[600px] shadow-2xl sm:border-black border-y-black border-[1px] sm:h-80 bg-slate-100 flex justify-center items-center sm:mt-20">
      <div className="mx-10">
        <div className="w-full h-full space-y-3 ">
          <h1>Bryan Alay</h1>
          <h3>Web developer</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
            magnam quo quasi sapiente nesciunt cupiditate nam consequuntur
            corrupti nulla. Animi.
          </p>
          <ul className="flex items-center gap-5 h-16">
            <li>
              <img
                className="rounded-full w-9 border-black border-[1px]"
                src="https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-linkedin-4550875_121338.png"
                alt="LNK"
              />
            </li>
            <li>
              <img
                className="rounded-full w-9 border-black border-[1px] shadow-2xl"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GH"
              />
            </li>
            <li>
              <img
                className="rounded-full w-9 border-black border-[1px] shadow-2xl"
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/google_original_logo_icon_146496.png"
                alt="GM"
              />
            </li>
            <li>
              <img
                className="rounded-full w-9 border-black border-[1px]"
                src="https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-linkedin-4550875_121338.png"
                alt="LNK"
              />
            </li>
            <li>
              <img
                className="rounded-full w-9 border-black border-[1px] shadow-2xl"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GH"
              />
            </li>
            <li>
              <img
                className="rounded-full w-9 border-black border-[1px] shadow-2xl"
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/google_original_logo_icon_146496.png"
                alt="GM"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
