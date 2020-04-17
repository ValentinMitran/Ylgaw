import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import "./AuthPage.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
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

export default LoginPage;