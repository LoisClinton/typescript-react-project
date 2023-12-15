import React, { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useParams, useNavigate, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { UserContext } from "../App";

//creating the context
interface TopicInterface {
  name: string;
  categoryNumber: number;
}

interface QuizDetailsConfig {
  Topic: TopicInterface;
  Difficulty: "easy" | "medium" | "hard";
}

// the type of the context 'value' down below
type QuizContextType = {
  quizDetails: QuizDetailsConfig | null;
  setQuizDetails: React.Dispatch<
    React.SetStateAction<QuizDetailsConfig | null>
  >;
};

//how do I extend a type
type QuizContextTypeWithNull = QuizContextType | null;

const QuizContext = createContext<QuizContextTypeWithNull>(null);

const Home: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = userContext;

  const [quizDetails, setQuizDetails] = useState<QuizDetailsConfig | null>(
    null
  );

  const [userScores, setUserScores] = useState();

  const getScoresAverage = async () => {
    console.log(currentUser.email);
    const res = await fetch(
      `http://localhost:3000/api/users/${currentUser.email}/scores`
    );
    const data = await res.json();
    setUserScores(data);
  };

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
  }, []);

  useEffect(() => {
    if (currentUser == null) {
      navigate("/");
    }
  }, []);

  return (
    <QuizContext.Provider value={{ quizDetails, setQuizDetails }}>
      <NavBar></NavBar>
      <Outlet />
    </QuizContext.Provider>
  );
};

export {
  Home,
  QuizContext,
  TopicInterface,
  QuizDetailsConfig,
  QuizContextTypeWithNull,
};
