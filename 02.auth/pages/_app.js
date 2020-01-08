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
    const { Component, pageProps } = this.props;
    const newCar = {
      car: {
        brand: 'Toyota',
        color: 'Red'
      }
    }
    // console.log(pageProps)
    return <Component {...pageProps} {...newCar} />
  }
}

export default MyApp