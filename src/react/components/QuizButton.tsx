import React, { useState } from "react";

interface QuizButtonProps {
  index: number;
  quizTopic: { name: string; categoryNumber: number };
}

const QuizButton: React.FC<QuizButtonProps> = ({ quizTopic }) => {
  const [categoryNum, setCategoryNum] = useState(quizTopic.categoryNumber);

  return (
    <div>
      <h1>{quizTopic.name}</h1>
      <button>words</button>
      <button>exit</button>
    </div>
  );
};

export default QuizButton;
