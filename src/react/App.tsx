import React, { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { RouterProvider } from "react-router-dom";
import router from "./router";

{
  /* <h1>Hello There World!</h1> */
}

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
