import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import StatsTopics from "../components/StatsTopics";

const Stats: React.FC = () => {
  type viewType = "Individual" | "Global" | "Friends";
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = userContext;
  const [userScores, setUserScores] = useState();
  const [topics, setTopics] = useState();
  const [view, setView] = useState<viewType>("Individual");
  const [averageOverall, setAverageOverall] = useState();

  const getTopics = async () => {
    const res = await fetch(`http://localhost:3000/api/topics/`);
    const data = await res.json();
    setTopics(data);
  };

  const getOverallPercentage = async (user) => {
    const userEmail = user.email;
    const res = await fetch(
      `http://localhost:3000/api/users/${userEmail}/scores`
    );
    const userScores = await res.json();

    if (userScores.length) {
      let totalCorrect = 0;
      let totalIncorrect = 0;

      userScores.map((score) => {
        totalCorrect += score.correct;
        totalIncorrect += score.incorrect;
      });

      const totalScoresFraction =
        totalCorrect / (totalCorrect + totalIncorrect);
      const totalScoresPercentage = (totalScoresFraction * 100).toFixed(2);
      setAverageOverall(totalScoresPercentage);
    }
  };

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
      getOverallPercentage(storageItem);
    }
  }, []);

  useEffect(() => {
    getTopics();
  }, []);

  let borderRadius: number;

  if (averageOverall == 100) {
    borderRadius = 6;
  } else {
    borderRadius = 0;
  }

  const barWidth = {
    width: `${averageOverall}%`,
    "border-radius": `6px ${borderRadius}px ${borderRadius}px 6px`,
  };

  return (
    <>
      {topics !== undefined ? (
        <main>
          <h1 className="text-yellow text-logo-large font-monomaniacone">
            Statistics Page
          </h1>
          <div>
            <button
              className="button-colors question-button topic-button"
              onClick={() => setView("Global")}
            >
              Global
            </button>
            <button
              className="button-colors question-button topic-button"
              onClick={() => setView("Individual")}
            >
              Indivdual
            </button>
            <button
              className="button-colors question-button topic-button"
              onClick={() => setView("Friends")}
            >
              Friends
            </button>
          </div>
          <>
            {view == "Individual" ? (
              <main>
                <div className="landing-page-topics-container">
                  <div className="quiz-topic-container background-light-grey">
                    <h2 className="text-yellow font-monomaniacone">Overall</h2>
                    <p className="text-yellow font-opensans">
                      Average Score: {averageOverall}
                      {"%"}
                    </p>
                    <div className="stats-bar-container">
                      <div style={barWidth} className="stats-bar"></div>
                    </div>
                  </div>
                  {topics.map((topic) => {
                    return <StatsTopics topicName={topic.name}></StatsTopics>;
                  })}
                </div>
              </main>
            ) : view == "Global" ? (
              <p>Global</p>
            ) : view == "Friends" ? (
              <p>Friends</p>
            ) : (
              <>Loading...</>
            )}
          </>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Stats;
