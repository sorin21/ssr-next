import createAuth0Client from "@auth0/auth0-spa-js";

class Auth {
  auth0 = createAuth0Client({
    domain: 'fml-knk.auth0.com',
    client_id: '8jphf5lUX6v58cRGGXqBQLK9WsGpwxT',
    redirect_uri: 'http://localhost:3000/calback'
  }).then(auth => {
    console.log('auth ', auth)
  }).catch(error => {
    console.log('Error from auth ', error)
  })

  login = () => {
    this.auth0.authorize()
  }
}

const auth0Serv = new Auth();
export default auth0Serv;