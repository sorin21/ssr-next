import React, { Component } from "react";
import Router from 'next/router';

import MainLayout from "../components/layouts/mainLayout";
import Message from "../components/includes/messaje";

class About extends Component {
  handleRouteChange = url => {
    console.log('App is changing to: ', url);
  }
  routeChangeComplete = url => {
    console.log('App changed to: ', url);
  }
  beforeHistoryChange = url => {
    console.log('beforeHistoryChange: ', url);
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.handleRouteChange);
    Router.events.on('routeChangeComplete', this.routeChangeComplete);
    Router.events.on('beforeHistoryChange', this.beforeHistoryChange);
    /*
    Router.beforePopState(({ url, as, options }) => {
      if (as === '/contact') {
        window.location.href = '/whatever';
        // always return false, because we want to disable back button
        return false;
      }
      // if the user wants to go to a diff route than contact, return true, allow it
      return true;
    })
    // redirect the user to go only on contact page from about page
    Router.replace('/contact');
    */
  }
  render() {
    console.log("props from about", this.props)
    return (
      <MainLayout>
        <h1>About</h1>
        <Message />
        <br />
        <span onClick={() => Router.push('/contact')}>Click me now</span>
      </MainLayout>
    );
  }
}

export default About;
