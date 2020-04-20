import React from "react";
import "./../Chat.scss";
import "./OpenChat.scss";
import { MdMoreVert, MdSend, MdArrowBack } from "react-icons/md";
import { TextField, IconButton } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

const OpenChat = (props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      username: "mrx",
      content: "Test message 1",
    },
    {
      username: "Valentin",
      content: "Test message 2",
    },
    {
      username: "mrx",
      content: "Test message 3",
    },
  ]);

  const messageHandler = (e) => {
    e.preventDefault();
    //Send message code
  };

  return (
    <>
      <div className="open-chat">
        <header>
          <MdArrowBack
            id="back"
            onClick={() => props.setSelectedConvo(false)}
          />
          <img
            src="https://www.pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/app-assets/images/portrait/small/avatar-s-16.jpg"
            alt=""
          />
          <span> {props.username}</span>
          <MdMoreVert />
        </header>
        <div className="messages">
          {messages.map(({ username, content }) => (
            <div id={username === "Valentin" ? "self" : ""} className="message">
              {username}
              {content}
            </div>
          ))}
        </div>
        <form onSubmit={(e) => messageHandler(e)}>
          <TextField
            id="outlined-multiline-flexible"
            label="Message..."
            multiline
            rowsMax={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
          />
          <IconButton aria-label="send" type="submit">
            <MdSend />
          </IconButton>
        </form>
      </div>
    </>
  );
};

export default OpenChat;
