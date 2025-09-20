import Items from "./Items";
import PresentationCard from "./PresentationCard";

const Content = () => {
  const array = [
    {
      link: "https://www.linkedin.com/in/bryan-alay-miranda/",
      img: "https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-linkedin-4550875_121338.png",
    },
    {
      link: "https://github.com/bryanalay",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      link: "mailTo:bryanalmi27@hotmail.com",
      img: "https://cdn1.iconfinder.com/data/icons/application-file-formats/128/microsoft-outlook-512.png",
    },
  ];

  return (
    <div className="grid grid-rows-2 sm:grid-rows-4 mt-[60px] bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="h-full sm:h-[565px] grid grid-cols-1 row-span-2 sm:row-span-4 sm:grid-cols-3">
        <div className="col-span-1 grid justify-center items-center m-16 gap-y-6">
          <img
            className="h-36 w-36 sm:h-56 sm:w-56 rounded-full mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="imagen"
            />
          <h1 className="font-bold text-2xl text-gray-900 dark:text-white">Bryan Miguel Alay Miranda</h1>
          <h2 className="text-lg text-gray-600 dark:text-gray-400">ws: +593 0991679883</h2>
          <Items array={array}/>
        </div>
        <PresentationCard />
      </div>
    </div>
  );
};

export default Content;
