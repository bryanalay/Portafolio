import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Project from "../Components/Project";

export default function ProjectPage() {
  return (
    <>
      <NavBar />
      <div className="grid justify-center items-center h-screen bg-blue-300 mt-10 p-10 relative z-0">
        <Project/>
      </div>
      <Footer />
    </>
  );
}
