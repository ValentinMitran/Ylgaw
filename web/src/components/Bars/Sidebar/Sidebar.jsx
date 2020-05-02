import React from "react";
import { MdHome, MdPeople, MdStore, MdApps } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ isSideOpen, setIsSideOpen }) => {
  return (
    <>
      <div className={isSideOpen ? "sidebar-full" : "sidebar-shrinked"}>
        <img
          src="https://powerssquared.com/wp-content/uploads/2017/01/Reaper_500.png"
          alt="Logo"
        />
        <Link to="/" onClick={() => setIsSideOpen(false)}>
          <MdHome />
          <span>Dashboard</span>
        </Link>
        <Link to="/social" onClick={() => setIsSideOpen(false)}>
          <MdPeople />
          <span>Social</span>
        </Link>
        <Link to="/store" onClick={() => setIsSideOpen(false)}>
          <MdStore />
          <span>Store</span>
        </Link>
        <Link onClick={() => setIsSideOpen(false)}>
          <MdApps />
          <span>Apps</span>
        </Link>
      </div>
      {isSideOpen ? (
        <div className="ghost-wrap" onClick={() => setIsSideOpen(false)}></div>
      ) : null}
    </>
  );
};

export default Sidebar;
