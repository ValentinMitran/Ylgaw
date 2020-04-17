import React from "react";
import { MdNotifications } from "react-icons/md";
import "./AppPage.scss";

const AppPage = () => {
  return (
    <>
      <div className="app">
        <div className="topbar">
          <div className="user-area">
            <div className="balance">&#36;16</div>
            <MdNotifications />
            <img
              src="https://lh3.googleusercontent.com/-yiwpbXgTmYE/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPMcgnrP1cptGUy-IH3cMbPHhfVIg/s88-c-k-c0x00ffffff-no-rj-mo/photo.jpg"
              alt="Profile"
            />
          </div>
        </div>
        <div className="sidebar"></div>
      </div>
    </>
  );
};

export default AppPage;