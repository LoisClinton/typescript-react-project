import React, { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { RouterProvider } from "react-router-dom";
import router from "./router";

{
  /* <h1>Hello There World!</h1> */
}
const TopicContext = createContext();

export const App: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <TopicContext.Provider value={{ searchText, setSearchText }}>
      <RouterProvider router={router} />
    </TopicContext.Provider>
  );
};
