import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Login from "../components/Login";
import Register from "../components/Register";
import { UserContext } from "../App";

const Authentication: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const { currentUser, setCurrentUser } = userContext;

  const loginFlipper = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
      navigate("/home");
    }
  }, []);

  return (
    <main>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        Authentication Page
      </h1>
      {isLogin === true ? (
        <Login setIsLogin={setIsLogin} loginFlipper={loginFlipper} />
      ) : (
        <></>
      )}
      {isLogin === false ? (
        <Register setIsLogin={setIsLogin} loginFlipper={loginFlipper} />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Authentication;
