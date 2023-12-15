import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import StatsTopics from "../components/StatsTopics";

{
  /* <div className="landing-page-topics-container">
{userScores.map((score) => {
  return (
    <div className="stats-topic-container background-light-grey">
      <h2 className="text-yellow font-opensans">
        {score.topicName}
      </h2>
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
</div> */
}

const Stats: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = userContext;
  const [userScores, setUserScores] = useState();
  const [topics, setTopics] = useState();

  const getTopics = async () => {
    console.log(currentUser.email);
    const res = await fetch(`http://localhost:3000/api/topics/`);
    const data = await res.json();
    setTopics(data);
  };

  const getScores = async () => {
    console.log(currentUser.email);
    const res = await fetch(
      `http://localhost:3000/api/users/${currentUser.email}/scores`
    );
    const data = await res.json();
    setUserScores(data);
  };

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
  }, []);

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
            <button className="button-colors question-button topic-button">
              Global
            </button>
            <button className="button-colors question-button topic-button">
              Indivdual
            </button>
            <button className="button-colors question-button topic-button">
              Friends
            </button>
          </div>
          <div className="landing-page-topics-container">
            {topics ? (
              <>
                {topics.map((topic) => {
                  return <StatsTopics topicName={topic.name}></StatsTopics>;
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Stats;
