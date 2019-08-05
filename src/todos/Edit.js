import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      responsible: '',
      priority: '',
      completed: false
    };
  }

  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const {
      data: { description, responsible, priority, completed }
    } = await axios(`http://localhost:4000/todos/${id}`);

    this.setState({
      description,
      responsible,
      priority,
      completed
    });
  };

  onSubmit = async event => {
    event.preventDefault();

    const {
      match: {
        params: { id }
      }
    } = this.props;
    const todo = this.state;

    await axios.post(`http://localhost:4000/todos/update/${id}`, todo);

    this.props.history.push('/');
  };

  onChangeTodoDescription = event => {
    const { value } = event.target;

    this.setState({
      description: value
    });
  };

  onChangeTodoResponsible = event => {
    const { value } = event.target;

    this.setState({
      responsible: value
    });
  };

  onChangeTodoPriority = event => {
    const { value } = event.target;

    this.setState({
      priority: value
    });
  };

  onChangeTodoCompleted = () => {
    const { completed } = this.state;

    this.setState({
      completed: !completed
    });
  };

  render() {
    const { description, responsible, priority, completed } = this.state;
    const {
      onSubmit,
      onChangeTodoDescription,
      onChangeTodoResponsible,
      onChangeTodoPriority,
      onChangeTodoCompleted
    } = this;

    console.log({ todo: this.state });

    return (
      <div>
        <h3 align="center">Update Todo</h3>
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
          <div className="form-check">
            <input
              className="form-check-input"
              id="completedCheckbox"
              type="checkbox"
              name="completedCheckbox"
              onChange={onChangeTodoCompleted}
              checked={completed}
              value={completed}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>

          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;
