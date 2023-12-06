import React, { useState } from "react";

// interface NavBarProps {
//   index: number;
//   quizTopic: { name: string; categoryNumber: number };
// }

const NavBar: React.FC = () => {
  return (
    <div className="navbar background-yellow">
      <button className="button-colors nav-button font-opensans">
        Friends
      </button>
      <button className="button-colors nav-button font-opensans">
        World Stats
      </button>
      <button className="button-colors nav-button font-opensans">
        Profile
      </button>
    </div>
  );
};

export default NavBar;
