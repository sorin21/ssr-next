import React, { Component } from "react";

const Profile = props => {
  console.log(props);
  return <div>Profile</div>;
};

Profile.getInitialProps = async context => {
  console.log(context);
  return {
    value: "ala bala portocala"
  };
};

export default Profile;
