import React, { createContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { RouterProvider } from "react-router-dom";
import router from "./router";

{
  /* <h1>Hello There World!</h1> */
}
const UserContext = createContext();

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <RouterProvider router={router} />;
    </UserContext.Provider>
  );
};

export { App, UserContext };
