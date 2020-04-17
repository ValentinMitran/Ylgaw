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
      <div className="hero">
        <div className="hero-text">
          <h1>Ylgaw</h1>
          <p>
            Your life is your life.
            <br />
            If you're going to try, go all the way. Otherwise, don't even start.
          </p>
          <button>Explore Us</button>
        </div>
      </div>
      <header id="myHeader" className="header sticky-nav">
        <div className="nav-container">
          <img
            src="https://powerssquared.com/wp-content/uploads/2017/01/Reaper_500.png"
            alt="Logo"
          />
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
      </header>
      <section className="about"></section>
      <section className="modules">
        <div className="modules-container">
          <div className="module">
            <img
              src="https://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/512/timemachine-icon.png"
              alt=""
            />
            <h3>Time Machine</h3>
            <p>
              Your daily diary. Write what's on your mind and upload a photo of
              yourself so you can remember how you used to look and think like
              in the future.
            </p>
          </div>
          <div className="module">
            <img
              src="https://i.ya-webdesign.com/images/stopwatch-transparent-flat-2.png"
              alt=""
            />
            <h3>Pomodoro</h3>
            <p>
              Your focus timer. If you need a quickstart or just track your
              focus time this is for you
            </p>
          </div>
          <div className="module">
            <img
              src="https://i.pinimg.com/originals/cf/ee/64/cfee6447285f1030c053e88cedf676f6.png"
              alt=""
            />
            <h3>NapChart</h3>
            <p>Your sleep scheduler. Plan and track your sleep and wake time</p>
          </div>
          <div className="module">
            <img
              src="https://cdn4.iconfinder.com/data/icons/business-people-set-4/64/people-network-social-business-connection-community-networking-communication-512.png"
              alt=""
            />
            <h3>Social Features</h3>
            <p>
              Post your thoughts, see what other users are doing and interact
            </p>
          </div>
          <div className="module">
            <img
              src="https://image.flaticon.com/icons/png/512/1803/1803330.png"
              alt=""
            />
            <h3>Marketplace</h3>
            <p>
              If you want to hire a coach, buy an ebook or anything digital this
              is what you need
            </p>
          </div>
          <div className="module">
            <img
              src="https://www.dlf.pt/png/big/9/95534_more-icon-png.png"
              alt=""
            />
            <h3>Much more...</h3>
            <p>Join us and check all the features by yourself</p>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <Link to="/donate">Donate</Link>
          <Link to="/blog">Blog</Link>

          <img
            src="https://powerssquared.com/wp-content/uploads/2017/01/Reaper_500.png"
            alt="Logo"
          />
          <Link to="/legal">Legal</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <span>
          {" "}
          Copyright © 2020 Ylgaw | Developed by{" "}
          <a href="github.com/ValentinMitran"> Valentin Mitran</a>
        </span>
      </footer>
    </>
  );
};

export default LandingPage;
