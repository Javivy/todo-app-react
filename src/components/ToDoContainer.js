/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList.js';
import Header from './Header.js';
import InputTodo from './InputTodo.js';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componendDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.parse(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  setUpdate = (updateTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updateTitle;
        }
        return todo;
      }),
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='inner'>
          <Header />
          <InputTodo addTodoProps={this.addTodoItem}/>
          <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
          setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;