import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import textCleanup from "../Functions/textCleanup";

interface ResultsObject {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
interface QuestionProps {
  quizData: ResultsObject[];
  quizCount: number;
  setQuizCount: React.Dispatch<React.SetStateAction<number>>;
}

const Question: React.FC<QuestionProps> = ({
  quizData,
  quizCount,
  setQuizCount,
}) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const [question, setQuestion] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const { currentUser, setCurrentUser } = userContext;

  const finishQuiz = async () => {
    console.log("final score:", score);
    console.log("current user", currentUser);
    console.log("quiz data", quizData);
    const userEmail = currentUser.email;
    const topicName = textCleanup(quizData[0].category);
    const topicDifficulty = quizData[0].difficulty;

    try {
      console.log("try");
      const response = await fetch(
        `http://localhost:3000/api/scores/${topicName}/${userEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topicName: topicName,
            difficulty: topicDifficulty,
            correct: score,
            incorrect: 10 - score,
          }),
        }
      );

      const data = await response.json();
      console.log("data:", data);

      if (response.status != 200) {
        throw new Error(data.message);
      }

      setQuestion("");
      setCorrectAnswer("");
      setAllAnswers([]);
      setScore(0);
      navigate("/home");
    } catch (err) {
      console.log("catch");
      console.error(err);
    }
  };

  const getQuestion = async () => {
    console.log("Score before this question:", score); //REMOVE LATER
    console.log("quizData:", quizData, "quizCount:", quizCount); //REMOVE LATER

    if (quizCount >= 10) {
      // await finishQuiz();  // trying to implement a popup first then finish
      setIsPopup(true);
    }

    const theQuestion = quizData[quizCount];
    const questionString = theQuestion.question;
    const randomNum = Math.floor(Math.random() * 4);
    const correctAnswer = theQuestion.correct_answer;
    setCorrectAnswer(`${correctAnswer}`);
    const answersArray = theQuestion.incorrect_answers;
    answersArray.splice(randomNum, 0, correctAnswer);
    console.log(answersArray); //REMOVE LATER
    setAllAnswers(answersArray);
    setQuestion(`${questionString}`);
    setIsLoading(false);
  };

  const checkAnswer = (thisAnswer: string) => {
    if (`${thisAnswer}` != `${correctAnswer}`) {
      console.log("wrong answer!");
      setIsCorrect(false);
    } else {
      console.log("right answer!");
      setIsCorrect(true);
    }
  };

  const nextQuesttion = () => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setQuizCount(quizCount + 1);
    setIsCorrect(false);
  };

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getQuestion();
    };

    fetchData();
  }, [quizData, quizCount]);

  if (isPopup) {
    return (
      <div className="quiz-content-container background-light-grey">
        <h3 className="text-yellow font-opensans container-heading">
          You got {score}/10 Answers right!
        </h3>
        <div className="container-buttons-spaced">
          <button
            className="button-colors topic-button question-button"
            onClick={() => finishQuiz()}
          >
            {" "}
            Finish Quiz
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="quiz-content-container background-light-grey">
        <h3 className="text-yellow font-opensans container-heading">
          QUESTION
        </h3>
        <p className="text-yellow font-opensans">{`${textCleanup(
          question
        )}`}</p>
        <h3 className="text-yellow font-opensans container-heading">
          ANSWERS:
        </h3>

        <div className="container-buttons-spaced">
          {allAnswers.map((answer) => (
            <button
              className="button-colors topic-button question-button"
              onClick={() => checkAnswer(answer)}
            >{`${textCleanup(answer)}`}</button>
          ))}
        </div>

        <div className="full-width container-buttons-right">
          <button className="button-colors topic-button">Exit quiz</button>
          <button
            className="button-colors topic-button"
            onClick={() => nextQuesttion()}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
};

export default Question;
