/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import TodoContainer from './functionBased/components/ToDoContainer.js';
//* Stylesheet
import './functionBased/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <TodoContainer />
  </BrowserRouter>,
);