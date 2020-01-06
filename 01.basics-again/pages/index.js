import React, { Component } from 'react';
import MainLayout from "../components/layouts/mainLayout";

// import css from '../styles/main.css';

class Home extends Component {
  render() {
    return (
      <>
        <MainLayout>
          {/* <h1 className={css.wrapper}>Welcome to NextJS</h1> */}
          <h1>Welcome to NextJS</h1>
        </MainLayout>
      </>
    );
  }
}

export default Home;