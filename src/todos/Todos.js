import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const fetchData = async setTodos => {
  const result = await axios('http://localhost:4000/todos/');

  setTodos(result.data);
};

const Todo = ({
  todo: {
    description = '',
    responsible = '',
    priority = '',
    completed,
    _id: id
  }
}) => {
  const maybeCompleted = completed ? 'completed' : '';

  return (
    <tr>
      <td className={maybeCompleted}>{description}</td>
      <td className={maybeCompleted}>{responsible}</td>
      <td className={maybeCompleted}>{priority}</td>
      <td>
        <Link to={`/edit/${id}`}>Edit</Link>
      </td>
    </tr>
  );
};

const todoList = todos => todos.map((todo, i) => <Todo todo={todo} key={i} />);

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData(setTodos);
  }, []);

  return (
    <div>
      <h3>Todos List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{todos.length > 0 && todoList(todos)}</tbody>
      </table>
    </div>
  );
};

export default Todos;
