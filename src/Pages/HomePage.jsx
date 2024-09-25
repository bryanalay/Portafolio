import Content from "../Components/Content";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <div className="grid h-full sm:h-[780px] w-full">
      <NavBar />
      <Content/>
      <Footer />

    </div>
  );
};

export default HomePage;
