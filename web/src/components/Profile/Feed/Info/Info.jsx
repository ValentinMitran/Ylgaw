import React, { useState } from "react";

const Info = () => {
  const [followers] = useState(530);
  const [memberSince] = useState(2020);
  const [country] = useState("Portugal");
  return (
    <>
      <h1>Info</h1>
      Member since {memberSince} <br />
      Followed by {followers} <br />
      From {country}
    </>
  );
};

export default Info;
