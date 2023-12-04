import React, { useState, useEffect } from "react";
import QuizButton from "../components/QuizButton";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allQuizTopics, setAllQuizTopics] = useState([]);

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
      {allQuizTopics.map((quizTopic, idx) => {
        return <QuizButton index={idx} quizTopic={quizTopic} />;
      })}
    </main>
  );
};

export default Home;
