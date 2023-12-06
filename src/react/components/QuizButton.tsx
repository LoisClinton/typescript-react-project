import React, { useState } from "react";

interface QuizButtonProps {
  index: number;
  quizTopic: { name: string; categoryNumber: number };
}

const QuizButton: React.FC<QuizButtonProps> = ({ quizTopic }) => {
  const [categoryNum, setCategoryNum] = useState(quizTopic.categoryNumber);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="background-light-grey quiz-topic-container">
      <h3 className="text-yellow font-opensans container-heading">
        {quizTopic.name}
      </h3>
      <div>Your quiz stats will go here eventually</div>
      <div className="full-width container-buttons-right">
        <button className="button-colors topic-button">Stats</button>
        <button className="button-colors topic-button">Quiz time!</button>
      </div>
    </div>
  );
};

export default QuizButton;
