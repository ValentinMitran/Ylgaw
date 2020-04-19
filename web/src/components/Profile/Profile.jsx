import React from "react";
import {MdHistory,MdHome} from 'react-icons/md';
import "./Profile.scss";

const Profile = () => {
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
          <a href="#feed"><MdHome/>Feed</a>
          <a href="#friends"><MdHistory/>History</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Profile;
