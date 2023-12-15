import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { UserContext } from "../App";

import {
  QuizContext,
  QuizContextTypeWithNull,
  QuizDetailsConfig,
} from "../pages/Home"; //context for setting quiz details

const QuizQuestions: React.FC = () => {
  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  // Check if quizContext is not null before using it
  if (!quizContext) {
    // Handle the case where quizContext is null
    return <div>Loading...</div>;
  }

  const { quizDetails, setQuizDetails } = quizContext;

  const [quizCount, setQuizCount] = useState(0);

  interface DataObject {
    response_code: number;
    results: object[];
  }

  interface ResultsObject {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  }

  type resultsArray = ResultsObject[];

  const [quizData, setQuizData] = useState<resultsArray>();

  let count = 0;
  const getQuizData: (
    details: QuizDetailsConfig | null
  ) => Promise<object | void> = async (details: QuizDetailsConfig | null) => {
    console.log(details);
    console.log(count);

    if (details === null) {
      throw new Error(
        "Could not get the correct details for this quiz, please try again later"
      );
    }

    const topicNumber = details.Topic.categoryNumber;
    const diff = details.Difficulty;
    console.log("boop");
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${topicNumber}&difficulty=${diff}&type=multiple`
    );
    const data = await res.json();
    console.log(data);

    if (data.response_code === 0) {
      setQuizData(data.results);
      setQuizCount(0);
      return;
    } else if (count === 3) {
      throw new Error(
        "We had a problem fetching the quiz data please try again"
      );
    } else {
      count++;
      return await getQuizData(details);
    }
  };

  useEffect(() => {
    if (!quizDetails) {
      // Handle the case where quizDetails is empty
      navigate("/home");
    }
    if (quizData === undefined) {
      getQuizData(quizDetails);
    }
  }, []);

  return (
    <main>
      <Question
        quizData={quizData}
        quizCount={quizCount}
        setQuizCount={setQuizCount}
      />
    </main>
  );
};

export default QuizQuestions;
