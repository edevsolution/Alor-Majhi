import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/Shared/AboutUs/AboutUs";
import ApplicationForm from "../Components/ApplicationForm/ApplicationForm";
import Team from "../Pages/Shared/Team/Team";
import Events from "../Pages/Shared/Event/Events";
import EventDetails from "../Pages/Shared/Event/EventDetails";

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
        path: "application-form",
        element: <ApplicationForm></ApplicationForm>,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "eventDetails/:id",
        element: <EventDetails />,
      },
    ],
  },
]);

export default router;
