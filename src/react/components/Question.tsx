import React, { useContext, useState, useEffect } from "react";
import QuizDifficulty from "./QuizDifficulty";
import { QuizDetailsConfig } from "../pages/Home";

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
  const [question, setQuestion] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const finishQuiz = () => {
    console.log("final score:", score);
  };

  const textCleanup = (text: string) => {
    const regex1 = /&quot;/g; //regex to replace &quot;
    const regex2 = /&#039;/g; //regex to replace &#039;
    const regex3 = /&rdquo;/g; //regex to replace &rdquo;
    const textToReturn = text
      .replace(regex1, '"')
      .replace(regex2, "'")
      .replace(regex3, "'");
    return textToReturn;
  };

  const getQuestion = () => {
    console.log("Score before this question:", score); //REMOVE LATER
    console.log("quizData:", quizData, "quizCount:", quizCount); //REMOVE LATER

    if (quizCount >= 10) {
      console.log("finishing");
      finishQuiz();
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
  };

  useEffect(() => {
    const fetchData = async () => {
      await getQuestion();
    };

    fetchData();
  }, [quizData, quizCount]);

  return (
    <div className="quiz-content-container background-light-grey">
      <h3 className="text-yellow font-opensans container-heading">QUESTION</h3>
      <p className="text-yellow font-opensans">{`${textCleanup(question)}`}</p>
      <h3 className="text-yellow font-opensans container-heading">ANSWERS:</h3>

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
};

export default Question;
