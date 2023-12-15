import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";

const Profile: React.FC = () => {
  const userContext = useContext(UserContext);

  const { currentUser, setCurrentUser } = userContext;

  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem("currentUserKey"));
    if (storageItem) {
      setCurrentUser(storageItem);
    }
  }, []);

  return (
    <>
      {currentUser ? (
        <main>
          <h1 className="text-yellow text-logo-large font-monomaniacone">
            Profile Page
          </h1>
          <div>
            <h2 className="text-yellow font-opensans">
              {currentUser.displayName}
            </h2>
            <p className="text-yellow font-opensans">Age: {currentUser.age}</p>
            <p className="text-yellow font-opensans">
              Favourite Topic: {currentUser.favouriteTopic}
            </p>
            <p className="text-yellow font-opensans">Bio: {currentUser.bio}</p>
            <p className="text-yellow font-opensans">
              Email: {currentUser.email}
            </p>
            <p className="text-yellow font-opensans">
              Password: {currentUser.password}
            </p>
          </div>
        </main>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Profile;
