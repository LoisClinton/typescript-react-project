import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../App";

const AllUsers: React.FC = ({
  isAllUsers,
  setIsAllUsers,
  usersFriends,
  setUsersFriends,
  addFriend,
  getFriends,
}) => {
  return (
    <main>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        AllUsers Page
      </h1>
    </main>
  );
};

export default AllUsers;
