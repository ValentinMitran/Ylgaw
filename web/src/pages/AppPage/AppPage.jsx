import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./AppPage.scss";
import Topbar from "../../components/Bars/Topbar/Topbar";
import Sidebar from "../../components/Bars/Sidebar/Sidebar";
import Profile from "../../components/Profile/Profile";
import Chat from "../../modules/Chat/Chat";
import TimeMachine from "./../../modules/TimeMachine/TimeMachine";
import Wallet from "./../../components/Wallet/Wallet";
import Settings from "../../components/Settings/Settings";

const AppPage = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <div className="app">
        <Topbar setIsSideOpen={setIsSideOpen} setIsChatOpen={setIsChatOpen} />
        <Sidebar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
        <Chat isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />

        <div className="main">
          <Switch>
            <Route path="/social">Social</Route>
            <Route path="/store">Store</Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/timemachine">
              <TimeMachine />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">Dashboard</Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default AppPage;
