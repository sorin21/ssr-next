import React, { Component } from "react";
import Router from 'next/router';

import MainLayout from "../components/layouts/mainLayout";
import Message from "../components/includes/message";

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
    // like React lifecycles we get Route lifecycles
    // if we want to register an event we have to use on()
    Router.events.on('routeChangeStart', this.handleRouteChange);
    Router.events.on('routeChangeComplete', this.routeChangeComplete);
    Router.events.on('beforeHistoryChange', this.beforeHistoryChange);

    // Router.beforePopState(({ url, as, options }) => {
    //   // console.log('url', url)
    //   // url is always equal to actula url
    //   if (as === '/contact') {
    //     window.location.href = '/whatever';
    //     // always return false, because we want to disable back button
    //     return false;
    //   }
    //   // if the user wants to go to a diff route than contact, return true, allow it
    //   return true;
    // })
    // // replace an url, redirect the user to go only on contact page from about page
    // Router.replace('/contact');
    // // Router.replace('/contact', '/contact/56');

  }
  render() {
    // console.log("props from about", this.props)
    // console.log("Router", Router)
    return (
      <MainLayout>
        <h1>About</h1>
        <Message />
        <br />
        <span onClick={() => Router.push('/contact')}>Click me now to go to Contact page</span>
        <span onClick={() => Router.push('/users/profile/1')}>Click me now to go to Profile page, user 1</span>
      </MainLayout>
    );
  }
}

export default About;
