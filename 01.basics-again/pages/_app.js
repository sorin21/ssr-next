import React from 'react'
import App from 'next/app'

class MyApp extends App {
  // This works like an HOC. Everything we render: home, about, users, contact,  is going throught this file
  // we get the intial props here and we inject them to the children components
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    // you can have some global props that you want to inject in components
    // so this obj will be available in all components 
    // so we can pass a function, or some data that comes from database, 
    // or a default css, to chage a property to true, if user goes to profile, and change the color
    const newCar = {
      car: {
        brand: 'Toyota',
        color: 'Red'
      }
    }
    // console.log(pageProps)
    // the Component is home, about, etc
    return <Component {...pageProps} {...newCar} />
  }
}

export default MyApp