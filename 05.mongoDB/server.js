const express = require('express');
// we use express with next
const next = require('next');
const mongoose = require('mongoose');

// settings for development - ask node what is the environment
const dev = process.env.NODE_ENV !== 'production';
const db = require('./config/keys').mongoURI;

// in express app usually we have
// const app = express(), but here next is in top of everything
// next is an obj that tells where we are, in our case development is true, if is false will be production
const app = next({ dev });

// handle requests
// is gonna handle all the routes
const handle = app.getRequestHandler();

// connect Database
// add useNewUrlParser and useCreateIndexto avoid mongo warnings
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  // use a promise to check if success
  .then(() => console.log('MongoDB Connected!'))
  .catch(error => console.log('MongoDB did not connect: ', error));

// start next application with this - create a next instance
app.prepare().then(() => {
  // custom rules:
  // 1) express server
  const server = express();

  // next will not handle routes anymore, here will let express to do it
  server.get('/users/profile/:id', (request, response) => {
    // we have to say what page to render when the user uses the above route
    const actualPage = '/users/profile';
    const queryParams = { userId: request.params.id, hello: 'Hello World!' }
    // we have to render something: req, res, and we want to go to actual page
    // we add queryParams because we need to pass userId, othervise if we go from home to a user page and reload, will fail
    // we need to send this response, to make the app to work, otherwise the browser will load forever
    app.render(request, response, actualPage, queryParams);
  })

  // express will let next to handle all routes
  server.get('*', (request, response) => {
    // when we get here we want to say: next go and handle that route, 
    // any kind of request, next go and handle it, with handle const
    // handle comes from above 
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
