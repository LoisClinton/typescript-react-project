import React, { createContext, useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import QuizButton from "../components/QuizButton";
import NavBar from "../components/NavBar";
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
    if (currentUser != null) {
      navigate("/home");
    }
  }, []);

  return (
    <main>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        "Authentication Page"
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
