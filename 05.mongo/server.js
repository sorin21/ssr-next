const express = require('express');
// we use express with next
const next = require('next');
const mongoose = require('mongoose');
// we can't insert real data in express without body-parser
const bodyParser = require('body-parser');

// settings for development - ask node what is the environment
const dev = process.env.NODE_ENV !== 'production';

// in express app usually we have
// const app = express(), but here next is in top of everything
// next is an obj that tells where we are, in our case development is true, if is false will be production
const app = next({ dev });

// handle requests
// is gonna handle all the routes
const handle = app.getRequestHandler();

const User = require('./models/users');
const robotsOptions = {
  root: __dirname + '/static/',
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8'
  }
}

// connect Database
// add useNewUrlParser and useCreateIndexto avoid mongo warnings
mongoose
  .connect(process.env.MONGO_SERV, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  // use a promise to check if success
  .then(() => console.log('MongoDB Connected!'))
  .catch(error => console.log('MongoDB did not connect: ', error));

// start next application with this - create a next instance
app.prepare().then(() => {
  // custom rules:
  // 1) express server
  const server = express();
  // Body parser middleware
  server.use(bodyParser.json());

  server.get('/robots.txt', (req, res) => {
    // sendFile - means profide the file: what we are sending and where is that file
    return res.status(200).sendFile('robots.txt', robotsOptions);
  })

  // GET ALL USERS
  server.get('/api/v1/usersall', (req, res) => {
    User.find({}, (err, allUsers) => {
      if (err) { return res.status(422).send(err) }
      return res.json(allUsers)
    })
  })

  // GET USER
  server.get('/api/v1/users', (req, res) => {
    User.find({ firstname: 'Cristina' }, (err, allUsers) => {
      if (err) { return res.status(422).send(err) }
      return res.json(allUsers)
    })
  })

  // UPDATE USER
  server.patch('/api/v1/users/:id', (req, res) => {
    let userId = req.params.id;
    let userData = req.body;

    User.findById(userId, (err, user) => {
      if (err) { return res.status(422).send(err) }

      user.set(userData)
      user.save((err, modUser) => {
        if (err) { return res.status(422).send(err) }
        return res.json(modUser)
      })
    })
  })

  // ADD NEW USER
  server.post('/api/v1/users', (req, res) => {
    const userData = req.body;
    const user = new User(userData);

    user.save((err, user) => {
      if (err) { return res.status(422).send(err) }
      return res.json(user)
    })
  })

  // DELETE USER by ID
  server.delete('/api/v1/users/:id', (req, res) => {
    let userId = req.params.id;

    User.deleteOne({ _id: userId }, (err, user) => {
      if (err) { return res.status(422).send(err) }
      // when we delete the user in the answer(postman) if deletedCount = 0 nothing was deleted,
      // if deletedCount = 1 one record was deleted
      return res.json(user)
      // return res.json({ status: 'DONE' })
    })
  })

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
