import React from 'react'
import App from 'next/app'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  // we get the intial props here and we inject them to the children components
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
  }

  render() {
    //  in pageProps we ge all the props from each component
    //  so, for ex, if we are on Home(index.js) in pageProps we get: 
    /*  
      user: {firstName: "Sorin", lastName: "Dragomir"}
      userData: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, 
    */
    // whatever chilren we render: Home(index.js), Contact, About, etc, we get the props from that child component
    const { Component, pageProps } = this.props;
    // this is a small example how we can create here an object an inject it to all child componenents
    const newCar = {
      car: {
        brand: 'Toyota',
        color: 'Red'
      }
    }
    // this Component is the actual component that we render: Home(index.js), Contact, About, etc
    return <Component {...pageProps} {...newCar} />
  }
}

export default MyApp