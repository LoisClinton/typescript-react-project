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

  // local storage stuff
  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
  }, []);

  useEffect(() => {
    if (currentUser != null) {
      localStorage.setItem("currentUserKey", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <RouterProvider router={router} />;
    </UserContext.Provider>
  );
};

export { App, UserContext };
