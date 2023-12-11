import React, { createContext, useState, useEffect } from "react";
import QuizButton from "../components/QuizButton";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Register from "../components/Register";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

// interface UserInterface {
//   displayName: string;
//   age: number;
//   favouriteTopic: string | null;
//   bio: string | null;
//   email: string;
//   password: string;
// }

// the type of the context 'value' down below

// type userContextType = {
//   currentUser: UserInterface | null;
//   setCurrentUser: React.Dispatch<React.SetStateAction<null>>;
// };

// type userContextTypeExtended = userContextType | null;

// const UserContext = createContext();

const Authentication: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const loginFlipper = () => {
    setIsLogin(!isLogin);
  };

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
