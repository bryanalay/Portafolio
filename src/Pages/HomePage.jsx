import Content from "../Components/Content";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <div className="grid h-[780px] w-full">
      <NavBar />
      <Content/>
    </div>
  );
};

export default HomePage;
