import React, { useState } from "react";
import { MdHome, MdPeople, MdStore, MdApps } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ isSideOpen, setIsSideOpen }) => {
  const [apps, setApps] = useState(false);
  return (
    <>
      <div className={isSideOpen ? "sidebar-full" : "sidebar-shrinked"}>
        <img
          src="https://powerssquared.com/wp-content/uploads/2017/01/Reaper_500.png"
          alt="Logo"
        />
        <Link
          to="/"
          onClick={() => {
            setIsSideOpen(false);
            setApps(false);
          }}
        >
          <MdHome />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/social"
          onClick={() => {
            setIsSideOpen(false);
            setApps(false);
          }}
        >
          <MdPeople />
          <span>Social</span>
        </Link>
        <Link
          to="/store"
          onClick={() => {
            setIsSideOpen(false);
            setApps(false);
          }}
        >
          <MdStore />
          <span>Store</span>
        </Link>
        <Link onClick={() => setApps(!apps)}>
          <MdApps />
          <span>Apps</span>
        </Link>
        {apps ? (
          <>
            <div className="apps-list">
              <Link
                to="/timemachine"
                onClick={() => {
                  setIsSideOpen(false);
                  setApps(false);
                }}
              >
                Diary
              </Link>
              <Link
                to="/napchart"
                onClick={() => {
                  setIsSideOpen(false);
                  setApps(false);
                }}
              >
                Napchart
              </Link>
              <Link
                to="/chemistry"
                onClick={() => {
                  setIsSideOpen(false);
                  setApps(false);
                }}
              >
                Chemistry
              </Link>
            </div>
          </>
        ) : null}
      </div>
      {isSideOpen ? (
        <div className="ghost-wrap" onClick={() => setIsSideOpen(false)}></div>
      ) : null}
      {apps ? (
        <div className="ghost-wrap" onClick={() => setApps(false)}></div>
      ) : null}
    </>
  );
};

export default Sidebar;
