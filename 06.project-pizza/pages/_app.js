import App from 'next/app';
import React from 'react';

import { Provider } from 'react-redux';

import withRedux from '../lib/withRedux';
import MainLayout from '../components/layouts/mainLayout'

class MyApp extends App {
  render() {
    // Component is provided by the app
    // pageProps and reduxStore comes from withRedux HOC
    const { Component, pageProps, reduxStore, siteData } = this.props;
    return (
      <>
        <Provider store={reduxStore}>
          <MainLayout>
            <Component {...pageProps} siteData={siteData} />
          </MainLayout>
        </Provider>
      </>
    )
  }
}

export default withRedux(MyApp);
