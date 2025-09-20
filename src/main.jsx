import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
