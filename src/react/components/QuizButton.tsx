import React, { useState, useEffect } from "react";
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

  const [averageTopicScores, setAverageTopicScores] = useState();

  const getTopicScoresPercentage = async () => {
    const topicName = quizTopic.name;
    const res = await fetch(`http://localhost:3000/api/scores/${topicName}`);
    const topicScores = await res.json();
    // console.log("topicScores:", topicScores);

    if (topicScores.length) {
      // console.log("Inside if statement");
      let totalCorrect = 0;
      let totalIncorrect = 0;

      topicScores.map((score) => {
        totalCorrect += score.correct;
        totalIncorrect += score.incorrect;
      });

      // console.log(
      //   "totalCorrect:",
      //   totalCorrect,
      //   "totalIncorrect:",
      //   totalIncorrect
      // );

      const totalScoresFraction =
        totalCorrect / (totalCorrect + totalIncorrect);
      const totalScoresPercentage = totalScoresFraction * 100;
      // console.log(`total scores percentage:`, totalScoresPercentage);
      setAverageTopicScores(totalScoresPercentage);
    }
  };

  useEffect(() => {
    getTopicScoresPercentage();
  }, []);

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
        <h2 className="text-yellow font-monomaniacone container-heading">
          {quizTopic.name}
        </h2>
        <div>
          {averageTopicScores ? (
            <p className="text-yellow font-opensans">
              Average Score: {averageTopicScores}
              {"%"}
            </p>
          ) : (
            <p className="text-yellow font-opensans">
              No average to display for this Quiz yet!{" "}
            </p>
          )}
        </div>
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
