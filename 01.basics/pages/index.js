import React, { Component } from "react";
import axios from "axios";

import MainLayout from "../components/layouts/mainLayout";

import css from '../styles/main.css';

class Home extends Component {
  static async getInitialProps(context) {
    let userData;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      userData = response.data;
    } catch (error) {
      console.log(error);
    }
    // console.log(context);

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
  };
  render() {
    return (
      <div>
        <MainLayout>
          <h1 className={css.wrapper}>Welcome</h1>
        </MainLayout>
      </div>
    );
  }
}

export default Home;
