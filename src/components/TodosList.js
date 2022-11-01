/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React from 'react';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello from TodosList</h1>
    );
  }
}

export default TodosList;