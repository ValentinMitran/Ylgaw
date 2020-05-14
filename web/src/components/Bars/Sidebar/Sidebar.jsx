import React, { useState } from "react";
import { MdHome, MdPeople, MdStore, MdApps } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

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
          }}
        >
          <MdHome />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/social"
          onClick={() => {
            setIsSideOpen(false);
          }}
        >
          <MdPeople />
          <span>Social</span>
        </Link>
        <Link
          to="/store"
          onClick={() => {
            setIsSideOpen(false);
          }}
        >
          <MdStore />
          <span>Store</span>
        </Link>

        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={() => {
            setApps(false);
          }}
        >
          <a
            onClick={() => {
              setApps((prev) => !prev);
            }}
          >
            <MdApps />
            <span>Apps</span>

            {apps ? (
              <>
                <div className="apps-list">
                  <Link
                    to="/timemachine"
                    onClick={() => {
                      setIsSideOpen(false);
                    }}
                  >
                    Diary
                  </Link>
                  <Link
                    to="/napchart"
                    onClick={() => {
                      setIsSideOpen(false);
                    }}
                  >
                    Napchart
                  </Link>
                  <Link
                    to="/chemistry"
                    onClick={() => {
                      setIsSideOpen(false);
                    }}
                  >
                    Chemistry
                  </Link>
                </div>
              </>
            ) : null}
          </a>
        </ClickAwayListener>
      </div>

      {isSideOpen ? (
        <div className="ghost-wrap" onClick={() => setIsSideOpen(false)}></div>
      ) : null}
    </>
  );
};

export default Sidebar;
