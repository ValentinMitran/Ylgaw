import React from "react";
import { MdNotifications, MdMenu,MdChat } from "react-icons/md";
import "./Topbar.scss";

const Topbar = ({ setIsSideOpen,setIsChatOpen }) => {
  return (
    <>
      <div className="topbar">
        <MdMenu id="menuToggler" onClick={() => setIsSideOpen(true)} />
        <div className="user-area">
          <div className="balance">&#36;16</div>
          <MdNotifications />
          <MdChat onClick={() => setIsChatOpen(true)} />
          <img
            src="https://avatars2.githubusercontent.com/u/40249132?s=460&u=67b6f37dabe04c908c42671e961f3e50076e2d63&v=4"
            alt="Profile"
          />
        </div>
      </div>
    </>
  );
};

export default Topbar;
