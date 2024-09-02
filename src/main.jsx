import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import ContatPage from "./Pages/ContactPage.jsx";
import ExpPage from "./Pages/ExpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
  {
    path: "/contact",
    element: <ContatPage />,
  },
  {
    path: "/exp",
    element: <ExpPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
