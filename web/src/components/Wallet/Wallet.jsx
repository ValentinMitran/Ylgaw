import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./Wallet.scss";
import Withdrawal from "./Withdrawal/Withdrawal";
import Topup from "./Topup/Topup";
import Overview from "./Overview/Overview";

const Wallet = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/topup`}>
          <Topup />
        </Route>
        <Route path={`${path}/withdrawal`}>
          <Withdrawal />
        </Route>
        <Route path={`${path}/`}>
          <Overview />
        </Route>
      </Switch>
    </>
  );
};

export default Wallet;
