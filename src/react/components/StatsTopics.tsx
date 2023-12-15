import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../App";

const StatsTopics: React.FC = ({ topicName }) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = userContext;
  const [averageTopicScores, setAverageTopicScores] = useState();

  const getTopicScores = async () => {
    const res = await fetch(`http://localhost:3000/api/scores/${topicName}`);
    const topicScores = await res.json();
    if (topicScores.length > 1) {
      const totalCorrect = 0;
      const totalIncorrect = 0;
      topicScores.map((details) => {});
    }
  };

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
  }, []);

  useEffect(() => {
    getTopicScores();
  }, []);

  return (
    <>
      {averageTopicScores ? (
        <main>
          <div className="landing-page-topics-container">
            {scores.map((score) => {})}
          </div>
        </main>
      ) : (
        <></>
      )}
    </>
  );
};

export default StatsTopics;
