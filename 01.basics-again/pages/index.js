import React, { Component } from 'react';
import axios from "axios";
import Link from "next/link";

import MainLayout from "../components/layouts/mainLayout";

// import css from '../styles/main.css';

class Home extends Component {
  static async getInitialProps({ pathname, query, asPath, req, res }) {
    let userData;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      userData = response.data;
    } catch (error) {
      console.log(error);
    }
    // NextJS will take this returned object and inject it, as props, in the actual component
    return {
      user: {
        firstName: "Sorin",
        lastName: "Dragomir"
      },
      userData
    };
  }

  state = {
    user: this.props.user,
    userData: this.props.userData
  }
  renderUserList = (users) => {
    return (
      users.map((user, index) => (
        <li key={index} className="list-group-item">
          {/* <Link href={`/users/profile?userId=${user.id}`}> */}
          <Link href={{ pathname: '/users/profile', query: { userId: user.id } }} as={`/users/profile/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </li >
      ))
    );
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <MainLayout>
          <h1>Select an user</h1>
          <ul className="list-group">
            {this.renderUserList(this.props.userData)}
          </ul>
        </MainLayout>
      </div>
    );
  }
}

export default Home;