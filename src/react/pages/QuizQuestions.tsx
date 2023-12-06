import React, { useState, useEffect } from "react";
import QuizButton from "../components/QuizButton";
import NavBar from "../components/NavBar";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const QuizQuestions: React.FC = () => {
  return (
    <main>
      <NavBar></NavBar>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        "Questions Page"
      </h1>
    </main>
  );
};

export default QuizQuestions;
