import React, { useState, useEffect } from "react";
import QuizButton from "../components/QuizButton";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";
// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const Login: React.FC = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(``, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status != 200) {
        throw new Error(data.message);
      }
      navigate("/home");
      setEmail("");
      setPassword("");
      return;
    } catch (err) {
      console.error(err);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <>
      <form
        className=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>Login</h2>
        <div className="">
          <p className="background-grey">Email</p>
          <input
            id="email-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="">
          <p className="">Password</p>
          <input
            id="password-input"
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <p className="">
          Dont have an account?
          <a
            className=""
            onClick={() => {
              setIsLogin(false);
            }}
          >
            {"Sign up"}
          </a>
        </p>
        <button className="" type="submit">
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
