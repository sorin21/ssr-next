const express = require('express');
const next = require('next');

// settings for development - ask node what is the environment
const dev = process.env.NODE_ENV !== 'production';
// in top of everything is next so will not be like in an express app: const app = express()
// next will need an obj that tells where we are, in our case development is true, if is false will be production
const app = next({ dev });

// getRequestHandler() will handle all the routes
const handle = app.getRequestHandler();

// start next application - create a next instance
app.prepare()
  .then(() => {
    // First, before every routes handeling, express will go here to check the custom rules
    const server = express();

    // add a specific rule
    // this has to be in the top of the file, so express will use this one, not the one below
    // listen the server for a specific route with a dynamic value, id
    server.get('/users/profile/:id', (request, response) => {
      // we have to say what page to render when the user uses in browser the above route
      // so run this route with the below params
      const actualPage = '/users/profile';

      // we are using userId as a param, because in index.js we set  query: { userId: user.id }
      const queryParams = { userId: request.params.id, hello: 'Hello World!' }
      app.render(request, response, actualPage, queryParams);
    })

    // express to handle all routes
    server.get('*', (request, response) => {
      // when we get any kind of request
      // express will want to say: nextjs go and handle that route, each route 
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
