import React, { useState } from "react";
import {
  MdNotifications,
  MdMenu,
  MdHome,
  MdPeople,
  MdStore,
  MdApps,
  MdChat,
} from "react-icons/md";
import { Switch, Route } from "react-router-dom";
import "./AppPage.scss";
import Topbar from "../../components/Bars/Topbar/Topbar";
import Sidebar from "../../components/Bars/Sidebar/Sidebar";
import Profile from "../../components/Profile/Profile";
import Chat from "../../modules/Chat/Chat";

const AppPage = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <div className="app">
        <Topbar setIsSideOpen={setIsSideOpen} setIsChatOpen={setIsChatOpen} />

        <Sidebar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />

        <div className="main">
          <Switch>
            <Route exact path="/">
              Dashboard
            </Route>
            <Route path="/social">Social</Route>
            <Route path="/store">Store</Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>

        <Chat isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      </div>
    </>
  );
};

export default AppPage;
