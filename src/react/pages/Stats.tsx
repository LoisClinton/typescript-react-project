import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../App";

const Stats: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = userContext;
  const [userScores, setUserScores] = useState();

  const getScores = async () => {
    console.log(currentUser.email);
    const res = await fetch(
      `http://localhost:3000/api/users/${currentUser.email}/scores`
    );
    const data = await res.json();
    setUserScores(data);
  };

  useEffect(() => {
    getScores();
  }, []);

  return (
    <>
      {userScores !== undefined ? (
        <main>
          <h1 className="text-yellow text-logo-large font-monomaniacone">
            Statistics Page
          </h1>
          <div>
            <button>Global</button>
            <button>Indivdual</button>
            <button>Friends</button>
          </div>
          {userScores.map((score) => {
            return (
              <div>
                <h1 className="text-yellow font-opensans">{score.topicName}</h1>
                <h3 className="text-yellow font-opensans">
                  Difficulty: {score.difficulty}
                </h3>
                <p className="text-yellow font-opensans">
                  Correct: {score.correct}
                </p>
                <p className="text-yellow font-opensans">
                  Incorrect: {score.incorrect}
                </p>
              </div>
            );
          })}
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Stats;
