import React from "react";

const MyFriends: React.FC = ({
  isAllUsers,
  setIsAllUsers,
  usersFriends,
  setUsersFriends,
  addFriend,
  getFriends,
}) => {
  return (
    <main>
      <h1 className="text-yellow font-monomaniacone">YOUR FRIENDS:</h1>
      <div className="landing-page-topics-container">
        {usersFriends
          ? usersFriends.map((friend) => {
              console.log(friend);
              return (
                <div className="quiz-topic-container background-light-grey">
                  <h4 className="text-yellow font-opensans">
                    {friend.displayName}
                  </h4>
                  <p className="self-start text-yellow font-opensans">
                    age: {friend.age}
                  </p>
                  <p className="self-start text-yellow font-opensans">
                    Favourite Topic: {friend.favouriteTopic}
                  </p>
                  <p className=" self-start text-yellow font-opensans">
                    Bio: {friend.bio}
                  </p>
                </div>
              );
            })
          : "Loading.."}
      </div>
    </main>
  );
};

export default MyFriends;
