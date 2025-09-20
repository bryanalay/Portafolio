import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
//import Project from "../Components/Project";
import Projects from "../Components/Projects";

export default function ProjectPage() {
  //imagen logo letra negras
  //https://i.imgur.com/YjKkmgp.png
  //imagen logo logo
  //https://i.imgur.com/JicdDhu.png
  //imagen logo letra blancas
  //https://i.imgur.com/JicdDhu.png
  const projs = [
    {
      img: "https://i.imgur.com/R7FiRjT.jpeg",
      title: "My recipe",
      link: "https://myrecipe-eight.vercel.app/",
      gh: "https://github.com/bryanalay/recipeFront",
      icons: [
        {
          src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          alter: "React",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
          alter: "Typescript",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
          alter: "Tailwind",
        },
        {
          src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png",
          alter: "Firebase",
        },
      ],
    },
    {
      img: "https://i.imgur.com/lRYCu07.jpeg",
      title: "My recipe API",
      link: "https://myrecipeapi.onrender.com/api-docs/",
      gh: "https://github.com/bryanalay/apipracticets",
      icons: [
        {
          src: "https://images.icon-icons.com/2415/PNG/512/nodejs_original_logo_icon_146411.png",
          alter: "nodejs",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png",
          alter: "Express js",
        },
        {
          src: "https://images.seeklogo.com/logo-png/48/2/mongodb-logo-png_seeklogo-481256.png",
          alter: "Mongodb",
        },{
          src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png",
          alter: "Firebase",
        },{
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
          alter: "Typescript",
        },
      ],
    },{
      img: "https://i.imgur.com/Rz70xAj.png",
      title: "AlmiApp",
      link: "https://almiapp.vercel.app/",
      gh: "https://github.com/bryanalay/aalmiapp",
      icons: [
        {
          src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          alter: "React",
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
          alter: "Postgresql",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
          alter: "Tailwind",
        },
        {
          src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png",
          alter: "Firebase",
        },
      ],
    },
    {
      img: "https://i.imgur.com/tOf2WLi.png",
      title: "AlmiApi",
      link: "https://almiapitest.herokuapp.com/api/v1/posts/",
      gh: "https://github.com/bryanalay/almiiapi",
      icons: [
        {
          src: "https://images.icon-icons.com/2415/PNG/512/nodejs_original_logo_icon_146411.png",
          alter: "nodejs",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png",
          alter: "Express js",
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
          alter: "Postgresql",
        },
      ],
    },
    {
      img: "https://i.imgur.com/O3xVZLL.png",
      title: "QRGenerator",
      link: "https://qrgen-one.vercel.app/",
      gh: "https://github.com/bryanalay/qrgen",
      icons: [
        {
          src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          alter: "React",
        },
      ],
    },
  ];

  return (
    <div className="grid w-full h-full bg-platinum-900 dark:bg-dark_green">
      <NavBar />
      <div className="grid justify-center items-center h-auto w-full lg:grid bg-platinum-800 dark:bg-hookers_green-400 sm:mt-5  mt-10 p-10 relative z-0">
        <div className="w-full text-3xl text-center font-extrabold pb-5 sm:py-5 text-hookers_green-200 dark:text-platinum-900">
          Proyectos
        </div>
        <Projects projs={projs} />
      </div>
      <Footer />
    </div>
  );
}
