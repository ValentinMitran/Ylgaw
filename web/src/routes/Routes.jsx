import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegisterPage from "../pages/AuthPage/RegisterPage";
import AppPage from "./../pages/AppPage/AppPage";
import PrivateRoute from "./PrivateRoute";
import { BalanceProvider } from "../utils/BalanceContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Routes = ({ history }) => {
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
          <Route path="/logout">
            {() => {
              localStorage.clear();
              return <Redirect to="/" />;
            }}
          </Route>
          <PrivateRoute path="/*">
            <BalanceProvider>
              <AppPage />
            </BalanceProvider>
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
