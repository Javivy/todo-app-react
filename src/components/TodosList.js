/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React from 'react';
import TodoItem from './TodoItem.js';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
          key={todo.id} todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;