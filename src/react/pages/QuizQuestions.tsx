import React, { useState, useEffect, useContext } from "react";
import QuizButton from "../components/QuizButton";
import NavBar from "../components/NavBar";
import {
  QuizContext,
  QuizContextTypeWithNull,
  QuizDetailsConfig,
} from "../pages/Home"; //context for setting quiz details

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const QuizQuestions: React.FC = () => {
  const quizContext = useContext(QuizContext);
  // Check if quizContext is not null before using it
  if (!quizContext) {
    // Handle the case where quizContext is null
    return <div>Loading...</div>;
  }
  const { quizDetails, setQuizDetails } = quizContext;

  const [quizCount, setQuizCount] = useState();
  const [quizData, setQuizData] = useState();
  interface DataObject {
    response_code: number;
    results: object[];
  }

  const tryQuizData = async (details: QuizDetailsConfig) => {
    let data: DataObject | undefined;
    let count = 0;
    data = undefined;
    if (data.response_code == 0) {
      return data;
    } else if (count >= 3) {
      throw new Error("Cannot find data");
    } else {
      count++;
      const topicNumber = details.Topic.categoryNumber;
      const diff = details.Difficulty;
      const res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${topicNumber}&difficulty=${diff}&type=multiple`
      );
      const data = await res.json();
      return tryQuizData(data);
    }
  };

  const getQuizData = async (details: QuizDetailsConfig | null) => {
    if (!details) {
      throw new Error("Couldnt get details");
    }
    try {
      const data = tryQuizData(details);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuizData(quizDetails);
  }, []);

  return (
    <main>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        "Questions Page"
      </h1>
    </main>
  );
};

export default QuizQuestions;
