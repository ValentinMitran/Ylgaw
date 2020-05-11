import React, { useContext } from "react";
import { MdNotifications, MdMenu, MdChat } from "react-icons/md";
import "./Topbar.scss";
import { BalanceContext } from "../../../utils/BalanceContext";
import { Link } from "react-router-dom";

const Topbar = ({ setIsSideOpen, setIsChatOpen }) => {
  const [balance] = useContext(BalanceContext);

  return (
    <>
      <div className="topbar">
        <MdMenu id="menuToggler" onClick={() => setIsSideOpen(true)} />
        <div className="user-area">
          <div className="balance">{balance} &euro;</div>
          <MdNotifications />
          <MdChat onClick={() => setIsChatOpen(true)} />
          <Link to="/profile">
            <img
              src="https://avatars2.githubusercontent.com/u/40249132?s=460&u=67b6f37dabe04c908c42671e961f3e50076e2d63&v=4"
              alt="Profile"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Topbar;
