import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Home /> },
      // {
      //   path: "home",
      //   element: <HomePage />,
      //   children: [
      //     { index: true, element: <DashBoard /> },
      //     { path: ":id", element: <DetailsPage /> },
      //   ],
      // },
    ],
  },
]);

export default router;
