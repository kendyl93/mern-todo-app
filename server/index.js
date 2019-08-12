const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const todoRoutes = express.Router();
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const Todo = require('./model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos-mern', {
  useNewUrlParser: true
});
const { connection } = mongoose;

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

  Todo.findById(id, (_, todo) => {
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
      .then(() => {
        res.json('Todo updated!');
      })
      .catch(() => {
        res.status(400).send('Update not possible');
      });
  });
});

todoRoutes.route('/:id').delete((req, res) => {
  const {
    params: { id }
  } = req;

  Todo.findById(id, (_, todo) => {
    todo
      .remove()
      .then(() => {
        res.json('Todo deleted!');
      })
      .catch(() => {
        res.status(400).send('Update not possible');
      });
  });
});

todoRoutes.route('/add').post((req, res) => {
  const todo = new Todo(req.body);

  todo
    .save()
    .then(() => {
      res.status(200).json({ todo: 'todo added successfully' });
    })
    .catch(() => {
      res.status(400).send('adding new todo failed');
    });
});

app.use('/todos', todoRoutes);

app.listen(4000, () => {
  console.log('Server is running on Port: ' + 4000);
});
