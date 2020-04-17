import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { toast } from "react-toastify";
import "./AuthPage.scss";

const LoginPage = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.authToken) {
      history.push("/");
    }
  }, [history]);

  const handleLogin = async (e) => {
    e.preventDefault();

    let response = await fetch("/api/user/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).catch((err) => {
      alert(err);
    });
    if (response.headers.get("authToken")) {
      localStorage.authToken = response.headers.get("authToken");
      toast.success("Logged in succesfully");
      history.push("/");
    } else {
      toast.error("Username/Password combination doesn't exist.");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="auth-page">
        <div className="auth-wrapper">
          <form onSubmit={handleLogin}>
            <TextField
              required
              id="outlined-required"
              label="Username"
              variant="outlined"
              style={{ "margin-bottom": "10px" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              style={{ "margin-bottom": "10px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              style={{ "margin-bottom": "10px" }}
            >
              Login
            </Button>
          </form>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default withRouter(LoginPage);
