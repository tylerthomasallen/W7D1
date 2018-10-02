import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  // debugger
  console.log('in function');
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store}/>, root);
});
