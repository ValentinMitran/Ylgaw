import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegisterPage from "../pages/AuthPage/RegisterPage";
import AppPage from "./../pages/AppPage/AppPage";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <PrivateRoute path="/*">
            <AppPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;