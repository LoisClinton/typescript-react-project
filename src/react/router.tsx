import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import Authentication from "./pages/Authentication";
import QuizQuestions from "./pages/QuizQuestions";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
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
          { path: "stats", element: <Stats /> },
          { path: "profile", element: <Profile /> },
          { path: "friends", element: <Friends /> },
        ],
      },
    ],
  },
]);

export default router;
