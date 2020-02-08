const express = require('express');
// we use express with next
const next = require('next');
const mongoose = require('mongoose');
// we can't insert real data in express without body-parser
const bodyParser = require('body-parser');
require('dotenv').config();


const Pizza = require('../models/pizza');
const Site = require('../models/site');
const Message = require('../models/messages');

// settings for development - ask node what is the environment
const dev = process.env.NODE_ENV !== 'production';
console.log('dev', dev)
// dotenv.config({ path: '../.env' });

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
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  // use a promise to check if success
  .then(() => console.log('MongoDB Connected!'))
  .catch(error => console.log('MongoDB did not connect: ', error));

app.prepare().then(() => {
  // custom rules:
  // 1) express server
  const server = express();
  // Body parser middleware 
  // use it to insert data in mongoose(atlas)
  server.use(bodyParser.json());

  // GET PIZZA by ID
  server.get('/pizzas/:id', (request, response) => {
    const actualPage = '/pizzas';
    // pizzaId comes from pizzas.js, when u click on a pizza, and is used in pizzas folder, index.js
    let queryParams = { pizzaName: request.params.id };

    // we need to send this response, to make the app to work, otherwise the browser will load forever
    app.render(request, response, actualPage, queryParams);
  })

  // ADD NEW PIZZA
  server.post('/pizza', (request, response) => {
    // get data json from body
    const pizzaData = request.body;
    // create a new pizza instance
    const pizza = new Pizza(pizzaData);

    // save data in mongoose
    pizza.save((err, pizza) => {
      // if error return 422 - unprocessable entity
      if (err) { return response.status(422).send(err) }
      // return a json with pizza
      return response.json(pizza)
    })
  })

  // GET ALL PIZZAS
  server.get('/pizza', (req, res) => {
    Pizza.find({}, (err, allPizzas) => {
      if (err) { return res.status(422).send(err) }
      return res.json(allPizzas)
    })
  })

  // GET PIZZA by NAME
  server.get('/pizza/:name', (req, res) => {
    Pizza.find({ idName: req.params.name }, (err, pizza) => {
      if (err) { return res.status(422).send(err) }
      return res.json(pizza)
    })
  })

  // GET ALL SITES
  server.get('/site', (req, res) => {
    Site.find({}, (err, allPizzas) => {
      if (err) { return res.status(422).send(err) }
      return res.json(allPizzas)
    })
  })

  // POST MESSAGES
  server.post('/messages', (request, response) => {
    // get data json from body
    const messageData = request.body;
    // create a new message instance
    const message = new Message(messageData);

    // save data in mongoose
    message.save((err, message) => {
      // if error return 422 - unprocessable entity
      if (err) { return response.status(422).send(err) }
      // return a json with message
      return response.json({ status: 'DONE' })
    })
  })

  // when we get a req, express will let next to handle all routes, all pages
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
  // kill everything if we get an error
  process.exit(1);
});

