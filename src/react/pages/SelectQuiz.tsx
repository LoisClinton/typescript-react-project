import React, { useContext, useState, useEffect } from "react";
import QuizButton from "../components/QuizButton";
import { QuizContext, QuizContextTypeWithNull } from "../pages/Home"; //context for setting quiz details
import { UserContext } from "../App";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const SelectQuiz: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allQuizTopics, setAllQuizTopics] = useState([]);
  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  // Check if quizContext is not null before using it
  if (!quizContext) {
    // Handle the case where quizContext is null
    return <div>Loading...</div>;
  }

  const { currentUser, setCurrentUser } = userContext;
  const { quizDetails, setQuizDetails } = quizContext;

  // Now you can use quizDetails and setQuizDetails
  async function getAllQuizTopics() {
    const res = await fetch(`http://localhost:3000/api/topics/`);
    const data = await res.json();
    setAllQuizTopics(data);
    setIsLoading(false);
  }

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
  }, []);

  useEffect(() => {
    getAllQuizTopics();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>LOADING</div>
      ) : (
        <main>
          <h1 className="text-yellow text-logo-large font-monomaniacone">
            QwikWitt
          </h1>

          <h3 className="text-yellow font-opensans landing-slogan">
            Need to strech your cognitive legs {currentUser.displayName}? Get
            Quizzing!
          </h3>

          <div className="landing-page-topics-container">
            {allQuizTopics.map((quizTopic, idx) => {
              return (
                <QuizButton
                  quizDetails={quizDetails}
                  setQuizDetails={setQuizDetails}
                  index={idx}
                  quizTopic={quizTopic}
                />
              );
            })}
          </div>
        </main>
      )}
    </>
  );
};

export default SelectQuiz;
