import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

// interface NavBarProps {
//   index: number;
//   quizTopic: { name: string; categoryNumber: number };
// }

const NavBar: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = userContext;

  const signOutUser = () => {
    setCurrentUser(null);
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar background-yellow">
      <button
        className="button-colors nav-button font-opensans"
        onClick={() => {
          signOutUser();
        }}
      >
        Sign Out
      </button>
      <button
        className="button-colors nav-button font-opensans"
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </button>
      <button
        className="button-colors nav-button font-opensans"
        onClick={() => {
          navigate("/home/friends");
        }}
      >
        Friends
      </button>
      <button
        className="button-colors nav-button font-opensans"
        onClick={() => {
          navigate("/home/stats");
        }}
      >
        Stats
      </button>
      <button
        className="button-colors nav-button font-opensans"
        onClick={() => {
          navigate("/home/profile");
        }}
      >
        Profile
      </button>
    </div>
  );
};

export default NavBar;
