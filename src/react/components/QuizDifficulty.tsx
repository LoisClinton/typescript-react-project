import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizDetailsConfig } from "../pages/Home";
import { UserContext } from "../App";

interface QuizDifficultyProps {
  quizTopic: { name: string; categoryNumber: number };
  quizDetails: QuizDetailsConfig | null;
  setQuizDetails: React.Dispatch<
    React.SetStateAction<QuizDetailsConfig | null>
  >;
}

const QuizDifficulty: React.FC<QuizDifficultyProps> = ({
  quizTopic,
  quizDetails,
  setQuizDetails,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const quizEasy = () => {
    setQuizDetails({
      Topic: quizTopic,
      Difficulty: "easy",
    });
    navigate("/home/quiz");
  };
  const quizMedium = () => {
    setQuizDetails({
      Topic: quizTopic,
      Difficulty: "medium",
    });
    navigate("/home/quiz");
  };
  const quizHard = () => {
    setQuizDetails({
      Topic: quizTopic,
      Difficulty: "hard",
    });
    navigate("/home/quiz");
  };

  return (
    <div className="backdrop">
      <div className="difficulty-popup">
        <h1>heeellloooo</h1>
        <button
          className="button-colors topic-button"
          onClick={() => quizEasy()}
        >
          Just a warm up
        </button>
        <button
          className="button-colors topic-button"
          onClick={() => quizMedium()}
        >
          Smarty Pants
        </button>
        <button
          className="button-colors topic-button"
          onClick={() => quizHard()}
        >
          Einstein who?
        </button>
      </div>
    </div>
  );
};

export default QuizDifficulty;
