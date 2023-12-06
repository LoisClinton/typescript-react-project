import React, { useState, useEffect } from "react";
import QuizButton from "../components/QuizButton";
import NavBar from "../components/NavBar";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allQuizTopics, setAllQuizTopics] = useState([]);
  const [quizDifficulty, setQuizDifficulty] = useState("");

  async function getAllQuizTopics() {
    const res = await fetch(`http://localhost:3000/api/topics/`);
    const data = await res.json();
    setAllQuizTopics(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getAllQuizTopics();
  }, []);

  return isLoading ? (
    <div>LOADING</div>
  ) : (
    <main>
      <NavBar></NavBar>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        QwikWitt
      </h1>

      <h3 className="text-yellow font-opensans landing-slogan">
        Need to strech your cognitive legs? Get Quizzing!
      </h3>

      <div className="landing-page-topics-container">
        {allQuizTopics.map((quizTopic, idx) => {
          return (
            <QuizButton
              quizDifficulty={quizDifficulty}
              setQuizDifficulty={setQuizDifficulty}
              index={idx}
              quizTopic={quizTopic}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
