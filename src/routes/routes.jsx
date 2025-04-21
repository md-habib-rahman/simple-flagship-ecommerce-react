import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import Favourites from "../pages/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: <p>Loading Please Wait...</p>,
        loader: () => fetch("../phones_1.json"),
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/phone-details/:id",
        Component: PhoneDetails,
        loader: () => fetch("../phones_1.json"),
      },
      {
        path: "/favourites",
        Component: Favourites,
      },
    ],
  },
]);

export default router;
