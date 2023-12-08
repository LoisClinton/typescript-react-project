import React, { useState, useEffect } from "react";
import QuizButton from "../components/QuizButton";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";
// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const Register: React.FC = () => {
  const [name, setName] = useState("");
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
          name: name,
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
        <h2>Register</h2>
        <div className="">
          <p className="">Name</p>
          <input
            id="name-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="">
          <p className="">Email</p>
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
          Already have an account?
          <a
            className=""
            onClick={() => {
              setIsLogin(true);
            }}
          >
            {" Login"}
          </a>
        </p>
        <button className="" type="submit">
          Create Account
        </button>
      </form>
    </>
  );
};

export default Register;
