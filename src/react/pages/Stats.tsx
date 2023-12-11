import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import QuizButton from "../components/QuizButton";
import NavBar from "../components/NavBar";
import { UserContext } from "../App";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const Stats: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = userContext;
  console.log(currentUser);
  const [userEmail, setUserEmail] = useState();

  const getDetails = async () => {
    const res = await fetch(
      `http://localhost:3000/api/users/${userEmail}/scores`
    );
    const data = await res.json();
    setUserEmail(data.email);
  };

  return (
    <main>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        Statistics Page
      </h1>
    </main>
  );
};

export default Stats;
