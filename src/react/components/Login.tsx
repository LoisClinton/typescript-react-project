import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const Login: React.FC = ({ setIsLogin, loginFlipper }) => {
  const userContext = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = userContext;

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(`http://localhost:3000/api/users/login`, {
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

      setCurrentUser(data);
      setEmail("");
      setPassword("");
      navigate("/home");

      return;
    } catch (err) {
      setEmail("");
      setPassword("");
      console.error(err);
    }
  }

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
  }, []);

  return (
    <>
      <form
        className="authentication-form background-light-grey"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2 className="text-yellow">Login</h2>
        <div className="">
          <p className="text-yellow">Email</p>
          <input
            id="email-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="">
          <p className="text-yellow">Password</p>
          <input
            id="password-input"
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <p className="text-yellow">
          Dont have an account?
          <a
            className=""
            onClick={() => {
              loginFlipper();
            }}
          >
            {"Sign up"}
          </a>
        </p>
        <button className="button-colors topic-button" type="submit">
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
