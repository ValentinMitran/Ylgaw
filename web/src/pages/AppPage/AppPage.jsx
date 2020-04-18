import React, { useEffect, useState } from "react";
import {
  MdNotifications,
  MdMenu,
  MdHome,
  MdPeople,
  MdStore,
  MdApps,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./AppPage.scss";

const AppPage = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <>
      <div className="app">
        <div className="topbar">
          <MdMenu id="menuToggler" onClick={() => setIsSideOpen(!isSideOpen)} />
          <div className="user-area">
            <div className="balance">&#36;16</div>
            <MdNotifications />
            <img
              src="https://avatars2.githubusercontent.com/u/40249132?s=460&u=67b6f37dabe04c908c42671e961f3e50076e2d63&v=4"
              alt="Profile"
            />
          </div>
        </div>
        <div className={isSideOpen ? "sidebar-full" : "sidebar-shrinked"}>
          <img
            src="https://powerssquared.com/wp-content/uploads/2017/01/Reaper_500.png"
            alt="Logo"
          />
          <Link>
            <MdHome />
            <span>Dashboard</span>
          </Link>
          <Link>
            <MdPeople />
            <span>Social</span>
          </Link>
          <Link>
            <MdStore />
            <span>Store</span>
          </Link>
          <Link>
            <MdApps />
            <span>Apps</span>
          </Link>
        </div>
        {isSideOpen ? (
          <div
            className="ghost-wrap"
            onClick={() => setIsSideOpen(false)}
          ></div>
        ) : null}
      </div>
    </>
  );
};

export default AppPage;
