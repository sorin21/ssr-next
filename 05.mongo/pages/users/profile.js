import React, { Component } from "react";
import axios from 'axios'

import MainLayout from '../../components/layouts/mainLayout';

// const Profile = props => {
//   console.log(props);
//   return <div>Profile</div>;
// };

// Profile.getInitialProps = async context => {
//   console.log(context);
//   return {
//     value: "ala bala portocala"
//   };
// };

class Profile extends Component {
  // we have access to contex and inside contex we have query
  static async getInitialProps({ query }) {
    let user;

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${query.userId}`);
      user = response.data;
    } catch (error) {
      console.log("Error from profile: ", error)
    }
    return { user }
  }
  showUser = (user) => {
    return (
      <div>
        <div>Name:  {user.name}</div>
        <div>User Name:  {user.username}</div>
        <div>Email:  {user.email}</div>
      </div>
    );
  }

  render() {
    console.log('props', this.props)
    return (
      <MainLayout>
        <br />
        <h2>User Profile</h2>
        {this.showUser(this.props.user)}
      </MainLayout>
    )
  }
}

export default Profile;
