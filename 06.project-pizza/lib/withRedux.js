import React from 'react';
import initializeStore from '../store';
import axios from 'axios';

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'


function getOrCreateStore(initialState) {
  // if we are on the server
  if (isServer) {
    return initializeStore(initialState)
  }
  // If we are on the client browser, store everything on the window objects 
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}


export default App => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore()
      let siteData;

      // adding reduxStore to the app context 
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      try {
        const response = await axios.get(`http://localhost:3000/site`);
        siteData = response.data[0];
      } catch (error) {
        console.log('= error withRedux = ', error);
      }

      return {
        ...appProps,
        siteData,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
