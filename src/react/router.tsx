import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import Authentication from "./pages/Authentication";
import QuizQuestions from "./pages/QuizQuestions";
import GlobalStats from "./pages/GlobalStats";
import Profile from "./pages/Profile";
import SelectQuiz from "./pages/SelectQuiz";

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
          { index: true, element: <SelectQuiz /> },
          { path: "quiz", element: <QuizQuestions /> },
          { path: "globalstats", element: <GlobalStats /> },
          { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },
]);

export default router;
