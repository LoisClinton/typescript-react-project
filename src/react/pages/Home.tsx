import React, { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy
//creating the context to store the searchText state

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

type QuizContextTypeWithNull = QuizContextType | null;

const QuizContext = createContext<QuizContextTypeWithNull>(null);

const Home: React.FC = () => {
  const [quizDetails, setQuizDetails] = useState<QuizDetailsConfig | null>(
    null
  );

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
