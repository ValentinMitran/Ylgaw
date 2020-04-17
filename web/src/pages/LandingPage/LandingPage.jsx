import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";

const LandingPage = () => {
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > header.offsetTop) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <>
      <div className="hero"></div>
      <header id="myHeader" className="header sticky-nav">
        <div className="container">
          <img
            src="https://cdn3.iconfinder.com/data/icons/video-game-items-concepts/128/grim-reaper-death-512.png"
            alt="Logo"
          />
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
      </header>
      <section className="about"></section>
      <section className="modules"></section>
    </>
  );
};

export default LandingPage;