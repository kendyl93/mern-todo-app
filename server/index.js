const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
require('dotenv').config();

const { REACT_APP_DB, REACT_APP_PORT_SERVER } = process.env;
console.log({ REACT_APP_PORT_SERVER, REACT_APP_DB });
const Todo = require('./model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(`${REACT_APP_DB}/todos-mern`, {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

todoRoutes.route('/').get((req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route('/:id').get((req, res) => {
  const {
    params: { id }
  } = req;

  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

todoRoutes.route('/:id').put((req, res) => {
  const {
    params: { id }
  } = req;

  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send('data is not found');
    } else {
      const {
        body: { description, responsible, priority, completed }
      } = req;

      todo.description = description;
      todo.responsible = responsible;
      todo.priority = priority;
      todo.completed = completed;
    }

    todo
      .save()
      .then(todo => {
        res.json('Todo updated!');
      })
      .catch(err => {
        res.status(400).send('Update not possible');
      });
  });
});

todoRoutes.route('/:id').delete((req, res) => {
  const {
    params: { id }
  } = req;

  Todo.findById(id, (err, todo) => {
    todo
      .remove()
      .then(todo => {
        res.json('Todo deleted!');
      })
      .catch(err => {
        res.status(400).send('Update not possible');
      });
  });
});

todoRoutes.route('/add').post(function(req, res) {
  const todo = new Todo(req.body);

  todo
    .save()
    .then(todo => {
      res.status(200).json({ todo: 'todo added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new todo failed');
    });
});

app.use('/todos', todoRoutes);

app.listen(REACT_APP_PORT_SERVER, function() {
  console.log('Server is running on Port: ' + REACT_APP_PORT_SERVER);
});
