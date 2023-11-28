import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

{
  /* <h1>Hello There World!</h1> */
}

export const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
