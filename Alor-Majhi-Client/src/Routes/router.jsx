import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/Shared/AboutUs/AboutUs";
import ApplicationForm from "../Components/ApplicationForm/ApplicationForm";
import Events from "../Pages/Shared/Event/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/events",
        element: <Events/>,
      },
      {
        path: "application-form",
        element: <ApplicationForm></ApplicationForm>,
      },
    ],
  },
]);

export default router;