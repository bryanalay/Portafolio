import NavBar from "../Components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="h-screen grid grid-cols-1 sm:grid-cols-3 bg-blue-300 mt-10">
        <div className="sm:col-span-1 bg-violet-100 flex justify-center">
          <img
            className="h-56 w-56  mt-20"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="imagen"
          />
        </div>

        <div className=" sm:col-span-2 bg-amber-100">asda</div>
      </div>
    </div>
  );
};

export default HomePage;
