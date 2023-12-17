import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";

const AllUsers: React.FC = ({
  isAllUsers,
  setIsAllUsers,
  usersFriends,
  setUsersFriends,
  addFriend,
  getFriends,
}) => {
  const userContext = useContext(UserContext);
  const { currentUser, setCurrentUser } = userContext;
  const [allUsers, setAllUsers] = useState();

  const getUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/`);

      const data = await response.json();

      console.log(data);

      if (response.status != 200) {
        throw new Error(data.message);
      }

      setAllUsers(data);

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
    getUsers();
  }, []);

  return (
    <main>
      <h1 className="text-yellow font-monomaniacone">ALL USERS:</h1>
      <div className="landing-page-topics-container">
        {allUsers
          ? allUsers.map((user) => {
              console.log(user);
              if (user.email === currentUser.email) {
                return;
              } else {
                return (
                  <div className="quiz-topic-container background-light-grey">
                    <h4 className="text-yellow font-opensans">
                      {user.displayName}
                    </h4>
                    <p className="self-start text-yellow font-opensans">
                      age: {user.age}
                    </p>
                    <p className="self-start text-yellow font-opensans">
                      Favourite Topic: {user.favouriteTopic}
                    </p>
                    <p className=" self-start text-yellow font-opensans">
                      Bio: {user.bio}
                    </p>
                    <button
                      className="button-colors topic-button"
                      onClick={() =>
                        addFriend(currentUser.id, user.displayName)
                      }
                    >
                      ADD FRIEND
                    </button>
                  </div>
                );
              }
            })
          : "Loading.."}
      </div>
    </main>
  );
};

export default AllUsers;
