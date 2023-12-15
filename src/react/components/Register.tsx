import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const Register: React.FC = ({ setIsLogin, loginFlipper }) => {
  const userContext = useContext(UserContext);

  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState(0);
  const [favouriteTopic, setFavouriteTopic] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = userContext;

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await fetch(`http://localhost:3000/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: displayName,
          age: age,
          favouriteTopic: favouriteTopic,
          bio: bio,
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
      setDisplayName("");
      setAge(0);
      setFavouriteTopic("");
      setBio("");
      setEmail("");
      setPassword("");
      navigate("/home");
      return;
    } catch (err) {
      console.error(err);
      setDisplayName("");
      setAge(0);
      setFavouriteTopic("");
      setBio("");
      setEmail("");
      setPassword("");
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
        <h2 className="text-yellow">Register</h2>
        <div className="">
          <p className="text-yellow">Display Name</p>
          <input
            id="display-name-input"
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </div>

        <div className="flex-row">
          <p className="text-yellow">Age</p>
          <p className="text-yellow">Favourite Topic</p>
        </div>

        <div className="">
          <input
            id="age-input"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />

          <select
            name="favouriteTopic"
            id="favourite-topic"
            placeholder="Favourite Topic"
            onChange={(event) => setFavouriteTopic(event.target.value)}
          >
            <option value="None">None</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Books">Books</option>
            <option value="Film">Film</option>
            <option value="Music">Music</option>
            <option value="Television">Television</option>
            <option value="Video Games">Video Games</option>
            <option value="Board Games">Board Games</option>
            <option value="Science & Nature">Science & Nature</option>
            <option value="Computers">Computers</option>
            <option value="Mythology">Mythology</option>
            <option value="Sports">Sports</option>
            <option value="Geography">Geography</option>
            <option value="History">History</option>
            <option value="Celebrities">Celebrities</option>
            <option value="Animals">Animals</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Comics">Comics</option>
            <option value="Anime and Manga">Anime and Manga</option>
            <option value="Cartoon & Animations">Cartoon & Animations</option>
          </select>
        </div>

        <div className="">
          <p className="text-yellow">Bio</p>
          <input
            id="bio-input"
            type="textarea"
            placeholder="Write your bio here..."
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </div>

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
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <p className="text-yellow">
          Already have an account?
          <a
            className=""
            onClick={() => {
              loginFlipper();
            }}
          >
            {" Login"}
          </a>
        </p>
        <button className="button-colors topic-button" type="submit">
          Create Account
        </button>
      </form>
    </>
  );
};

export default Register;
