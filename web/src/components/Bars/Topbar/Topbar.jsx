import React, { useContext, useState } from "react";
import { MdNotifications, MdMenu, MdChat } from "react-icons/md";
import "./Topbar.scss";
import { BalanceContext } from "../../../utils/BalanceContext";
import { Link } from "react-router-dom";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const Topbar = ({ setIsSideOpen, setIsChatOpen }) => {
  const [balance] = useContext(BalanceContext);
  const [balanceMenu, setBalanceMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <>
      <div className="topbar">
        <MdMenu id="menuToggler" onClick={() => setIsSideOpen(true)} />
        <div className="user-area">
          <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={() => {
              setBalanceMenu(false);
            }}
          >
            <div
              className="balance"
              onClick={() => {
                setBalanceMenu((prev) => !prev);
              }}
            >
              {balance} &euro;
              {balanceMenu ? (
                <div className="balance-menu">
                  <Link to="/wallet/topup">
                    <FaPlusSquare />
                    Top-up
                  </Link>
                  <Link to="/wallet/withdrawal">
                    <FaMinusSquare />
                    Withdraw
                  </Link>
                </div>
              ) : null}
            </div>
          </ClickAwayListener>
          <MdNotifications />
          <MdChat onClick={() => setIsChatOpen(true)} />

          <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={() => {
              setProfileMenu(false);
            }}
          >
            <div
              className="profile"
              onClick={() => {
                setProfileMenu((prev) => !prev);
              }}
            >
              <img
                src="https://avatars2.githubusercontent.com/u/40249132?s=460&u=67b6f37dabe04c908c42671e961f3e50076e2d63&v=4"
                alt="Profile"
              />

              {profileMenu ? (
                <div className="profile-menu">
                  <Link to="/profile">Profile</Link>
                  <Link to="/settings">Settings</Link>
                  <Link to="/logout">Logout</Link>
                </div>
              ) : null}
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </>
  );
};

export default Topbar;
