import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// interface NavBarProps {
//   index: number;
//   quizTopic: { name: string; categoryNumber: number };
// }

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar background-yellow">
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
