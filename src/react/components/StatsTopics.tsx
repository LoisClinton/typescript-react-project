import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../App";

const StatsTopics: React.FC = ({ topicName }) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = userContext;
  const [averageTopicScores, setAverageTopicScores] = useState();

  const getTopicScoresPercentage = async () => {
    const res = await fetch(`http://localhost:3000/api/scores/${topicName}`);
    const topicScores = await res.json();

    if (topicScores.length) {
      let totalCorrect = 0;
      let totalIncorrect = 0;

      topicScores.map((score) => {
        totalCorrect += score.correct;
        totalIncorrect += score.incorrect;
      });

      const totalScoresFraction =
        totalCorrect / (totalCorrect + totalIncorrect);
      const totalScoresPercentage = totalScoresFraction * 100;
      setAverageTopicScores(totalScoresPercentage);
    }
  };

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
  }, []);

  useEffect(() => {
    getTopicScoresPercentage();
  }, [averageTopicScores]);

  let borderRadius: number;

  if (averageTopicScores == 100) {
    borderRadius = 6;
  } else {
    borderRadius = 0;
  }

  const barWidth = {
    width: `${averageTopicScores}%`,
    "border-radius": `6px ${borderRadius}px ${borderRadius}px 6px`,
  };

  return (
    <>
      {averageTopicScores ? (
        <div className="quiz-topic-container background-light-grey">
          <h2 className="text-yellow font-monomaniacone">{topicName}</h2>
          <p className="text-yellow font-opensans">
            Average Score: {averageTopicScores}
            {"%"}
          </p>
          <div className="stats-bar-container">
            <div style={barWidth} className="stats-bar"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default StatsTopics;
