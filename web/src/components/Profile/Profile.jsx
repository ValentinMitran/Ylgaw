import React from "react";
import { MdHistory, MdHome } from "react-icons/md";
import "./Profile.scss";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Feed from "./Feed/Feed";
import History from "./History/History";

const Profile = () => {
  let { url } = useRouteMatch();

  const handleClick = (event) => {
    var x = document.getElementsByClassName("active-path");
    console.log(x[0]);
    if (x.length !== 0) {
      x[0].classList.remove("active-path");
    }
    event.currentTarget.classList.add("active-path");
  };

  return (
    <>
      <div className="profile-header">
        <div className="profile-wallpaper">
          <img
            src="https://www.pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/app-assets/images/profile/post-media/profile-banner.jpg"
            alt=""
          />
        </div>
        <div className="profile-body">
          <img
            src="https://www.pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/app-assets/images/portrait/small/avatar-s-16.jpg"
            alt=""
          />
          <h4>Valentin Mitran</h4>
          <span>Rookie</span>
          <nav>
            <Link to="/profile" onClick={handleClick} className="active-path">
              <MdHome />
              Feed
            </Link>
            <Link to="/profile/history" onClick={handleClick}>
              <MdHistory />
              History
            </Link>
          </nav>
        </div>
      </div>

      <div className="profile-main">
        <Switch>
          <Route path={`${url}/history`}>
            <History />
          </Route>
          <Route path={`${url}/`}>
            <Feed />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Profile;