import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../App";

const Stats: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = userContext;
  console.log(currentUser);
  const [userEmail, setUserEmail] = useState(currentUser.email);
  const [userScores, setUserScores] = useState(currentUser.scores);

  return (
    <main>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        Statistics Page
      </h1>
      {userScores.map((score, idx) => {
        return (
          <div>
            <h1>{score.topicName}</h1>
            <h2>{score.difficulty}</h2>
            <p>{score.correct}</p>
            <p>{score.incorrect}</p>
          </div>
        );
      })}
    </main>
  );
};

export default Stats;
