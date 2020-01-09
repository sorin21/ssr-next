import App from 'next/app';
import React from 'react';

import { Provider } from 'react-redux';

import withRedux from '../lib/withRedux';

class MyApp extends App {
  render() {
    // Component is provided by the app
    // pageProps and reduxStore comes from withRedux HOC
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </>
    )
  }
}

export default withRedux(MyApp);
