import React, { useState } from 'react';
import axios from 'axios';
require('dotenv');

const { HOST } = process.env;
console.log({ HOST, process });
const endpoint = query => `${HOST}/${query}`;

const onChange = set => event => set(event.target.value);

const Create = () => {
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('');
  const [priority, setPriority] = useState('');
  const [completed, setCompleted] = useState(false);

  const onChangeTodoDescription = onChange(setDescription);
  const onChangeTodoResponsible = onChange(setResponsible);
  const onChangeTodoPriority = onChange(setPriority);

  const clearState = () => {
    setDescription('');
    setResponsible('');
    setPriority('');
    setCompleted(false);
  };

  const onSubmit = event => {
    event.preventDefault();

    const todo = { description, responsible, priority, completed };

    axios.post(endpoint('todos/add'), todo).then(res => console.log(res.data));

    clearState();
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={onChangeTodoDescription}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            value={responsible}
            onChange={onChangeTodoResponsible}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={priority === 'Low'}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={priority === 'Medium'}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={priority === 'High'}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
