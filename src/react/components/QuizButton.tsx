import React, { useContext, useState, useEffect } from "react";
import QuizDifficulty from "./QuizDifficulty";
import { QuizDetailsConfig } from "../pages/Home";

interface QuizButtonProps {
  index: number;
  quizTopic: { name: string; categoryNumber: number };
  quizDetails: QuizDetailsConfig | null;
  setQuizDetails: React.Dispatch<
    React.SetStateAction<QuizDetailsConfig | null>
  >;
}

const QuizButton: React.FC<QuizButtonProps> = ({
  quizTopic,
  quizDetails,
  setQuizDetails,
}) => {
  const [isSelectDifficulty, setIsSelectDifficulty] = useState<boolean>(false);

  //   if (!quizContext) {
  //     // Handle the case where the context is not yet available
  //     return null;
  //   }

  const [categoryNum, setCategoryNum] = useState(quizTopic.categoryNumber);
  const handleQuizClick = () => {
    return setIsSelectDifficulty(true);
  };

  return (
    <>
      {isSelectDifficulty ? (
        <QuizDifficulty
          quizTopic={quizTopic}
          quizDetails={quizDetails}
          setQuizDetails={setQuizDetails}
        />
      ) : (
        " "
      )}
      <div className="background-light-grey quiz-topic-container">
        <h3 className="text-yellow font-opensans container-heading">
          {quizTopic.name}
        </h3>
        <div>Your quiz stats will go here eventually</div>
        <div className="full-width container-buttons-right">
          <button className="button-colors topic-button">Stats</button>
          <button
            className="button-colors topic-button"
            onClick={() => handleQuizClick()}
          >
            Quiz time!
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizButton;
