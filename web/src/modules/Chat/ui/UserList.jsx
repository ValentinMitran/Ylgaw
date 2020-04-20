import React from "react";
import "./UserList.scss";
import { MdSearch, MdMessage } from "react-icons/md";
import { useState } from "react";

const UserList = ({ setSelectedConvo }) => {
  const [users, setUsers] = useState([
    {
      username: "mrx",
    },
    {
      username: "Valentin",
    },
  ]);

  return (
    <>
      <div className="user-list">
        <header>
          <span> Chat</span>
          <MdSearch />
        </header>

        {users.map((user) => (
          <div className="user" onClick={() => setSelectedConvo(user.username)}>
            <img
              src="https://vuely.theironnetwork.org/static/avatars/user-28.jpg"
              alt="2"
            />
            <span>{user.username}</span>
            <MdMessage />
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
