import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import QuizQuestions from "./pages/QuizQuestions";
import GlobalStats from "./pages/GlobalStats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Authentication /> },
      {
        path: "home",
        element: <Home />,
        children: [
          { index: true, element: <QuizQuestions /> },
          { path: ":id", element: <GlobalStats /> },
          { path: ":id", element: <Profile /> },
        ],
      },
    ],
  },
]);

export default router;
