import React, { useState, useEffect } from "react";
import QuizButton from "../components/QuizButton";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Register from "../components/Register";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const Authentication: React.FC = () => {
  return (
    <main>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        "Authentication Page"
      </h1>
      <Login />
      <Register />
    </main>
  );
};

export default Authentication;
