import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../App";
import AllUsers from "../components/AllUsers";
import MyFriends from "../components/MyFriends";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// API thingy

const Friends: React.FC = () => {
  const [isAllUsers, setIsAllUsers] = useState<boolean>(false);
  const [usersFriends, setUsersFriends] = useState();
  const userContext = useContext(UserContext);
  const { currentUser, setCurrentUser } = userContext;

  const addFriend = async (userId, friendName) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/${userId}/${friendName}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.status != 200) {
        throw new Error(data.message);
      }

      return;
    } catch (err) {
      console.error(err);
    }
  };

  const getFriends = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/${userId}/friends`
      );

      const data = await response.json();

      console.log(data);

      if (response.status != 200) {
        throw new Error(data.message);
      }

      setUsersFriends(data);

      return;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
    const contextUserId = storageItem.id;
    getFriends(contextUserId);
  }, [isAllUsers]);

  return (
    <main>
      <h1 className="text-yellow text-logo-large font-monomaniacone">
        Friends Page
      </h1>
      <div>
        <button
          className="button-colors question-button topic-button"
          onClick={() => setIsAllUsers(false)}
        >
          Friends
        </button>
        <button
          className="button-colors question-button topic-button"
          onClick={() => setIsAllUsers(true)}
        >
          All Users
        </button>
      </div>
      {isAllUsers ? (
        <AllUsers
          isAllUsers={isAllUsers}
          setIsAllUsers={setIsAllUsers}
          usersFriends={usersFriends}
          setUsersFriends={setUsersFriends}
          addFriend={addFriend}
          getFriends={getFriends}
        />
      ) : (
        <MyFriends
          isAllUsers={isAllUsers}
          setIsAllUsers={setIsAllUsers}
          usersFriends={usersFriends}
          setUsersFriends={setUsersFriends}
          addFriend={addFriend}
          getFriends={getFriends}
        />
      )}
    </main>
  );
};

export default Friends;
