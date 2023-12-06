import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const QuizDifficulty: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <button className="button-colors topic-button">Just a warm up</button>
      <button className="button-colors topic-button">Smarty Pants</button>
      <button className="button-colors topic-button">Einstein who?</button>
    </div>
  );
};

export default QuizDifficulty;
