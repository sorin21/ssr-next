const express = require('express');
const next = require('next');

// settings for development - ask node what is the environment
const dev = process.env.NODE_ENV !== 'production';
// next is an obj that tells where we are, in our case development is true, if is false will be production
const app = next({ dev });

// handle requests
const handle = app.getRequestHandler();

// start next - create a next instance
app.prepare().then(() => {
  // custom rules
  const server = express();

  server.get('/users/profile/:id', (request, response) => {
    // we have to say what page to render when the user uses the above route
    const actualPage = '/users/profile';
    const queryParams = { userId: request.params.id, hello: 'Hello World!' }
    app.render(request, response, actualPage, queryParams);
  })

  // express to handle all routes
  server.get('*', (request, response) => {
    // we want to say: next go and handle that route 
    return handle(request, response);
  })

  server.listen(3000, (error) => {
    if (error) throw error;
    console.log('Server running on port 3000!')
  })
}).catch((error) => {
  // we add errors to errors stack
  console.error('Error from prepare: ', error.stack)
  // kill everything
  process.exit(1);
})
