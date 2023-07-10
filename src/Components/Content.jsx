import Footer from "./Footer";
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
    <div className="grid grid-rows-3 sm:grid-rows-4 mt-[60px] bg-slate-100">
      <div className="h-[82x4px] sm:h-[471px] grid grid-cols-1 row-span-2 sm:row-span-3 sm:grid-cols-3">
        <div className="sm:col-span-1 grid justify-center">
          <img
            className="h-56 w-56 mt-10 sm:mt-20 shadow-2xl rounded-full border-black border-[4px]"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="imagen"
          />
          {console.log(array)}
          <Items array={array}/>
          
        </div>
        <PresentationCard />
      </div>
      <Footer />
    </div>
  );
};

export default Content;
