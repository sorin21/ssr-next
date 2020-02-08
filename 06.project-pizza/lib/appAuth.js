import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import axios from 'axios';
import getConfig from 'next/config'

import { AUTH_CONFIG } from './auth0-variables';
// import history from '../history';

const { publicRuntimeConfig } = getConfig();

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientID,
      redirectUri: AUTH_CONFIG.callbackUrl,
      audience: AUTH_CONFIG.apiUrl,
      responseType: 'token id_token',
      scope: 'openid profile read:messages'
    })
  }
}

const auth0Serv = new Auth();
export default auth0Serv;