import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";
import AboutUs from "../sections/AboutUs";
import Featured from "../sections/Featured";
import Services from "../sections/Services";
import Clients from "../sections/Clients";
import Contact from "../sections/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      { path: "nosotros", element: <AboutUs /> },
      { path: "obras", element: <Featured /> },
      { path: "servicios", element: <Services /> },
      { path: "clientes", element: <Clients /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;