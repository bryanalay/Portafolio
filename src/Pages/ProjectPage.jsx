import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
//import Project from "../Components/Project";
import Projects from "../Components/Projects";

export default function ProjectPage() {
  // const proj = {
  //   img: "https://i.imgur.com/Rz70xAj.png",
  //   title: "AlmiApp",
  //   link: "https://bryanalay.github.io/aalmiapp/",
  //   gh: "https://github.com/bryanalay/aalmiapp",
  //   icons: [
  //     {
  //       src: "https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png",
  //       alter: "React",
  //     },
  //     {
  //       src: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
  //       alter: "Postgresql",
  //     },
  //     {
  //       src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
  //       alter: "Tailwind",
  //     },
  //   ],
  // };

  const projs = [
    {
      img: "https://i.imgur.com/Rz70xAj.png",
      title: "AlmiApp",
      link: "https://almiapp.vercel.app/",
      gh: "https://github.com/bryanalay/aalmiapp",
      icons: [
        {
          src: "https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png",
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
      ],
    },
    {
      img: "https://i.imgur.com/tOf2WLi.png",
      title: "AlmiApi",
      link: "https://almiapitest.herokuapp.com/api/v1/posts/",
      gh: "https://github.com/bryanalay/almiiapi",
      icons: [
        {
          src: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
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
          src: "https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png",
          alter: "React",
        },
      ],
    },
  ];

  return (
    <div className="grid w-full">
      <NavBar />
      <div className="grid justify-center items-center h-full sm:h-screen w-full lg:grid bg-slate-100 sm:mt-5  mt-10 p-10 relative z-0">
        <div className="w-full text-3xl text-center font-extrabold">
          Proyectos
        </div>
        <Projects projs={projs} />
      </div>
      <Footer />
    </div>
  );
}
