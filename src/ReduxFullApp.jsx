import React, { Component } from 'react';
// import {Link} from 'react-router';
import logo from './logo.svg';
import './App.css';

import Todo from './components/Todo';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Title from './components/Title';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoReducerCreator from './reducers';
import { fetchTodosFromServer } from './actions';
import thunk from 'redux-thunk';
import { logger, crashReporter } from './middlewares';

// todo state初始值
const initTodoState = {
  todos: [],
  isFetchingTodoList: false,
  error:null,
  
};

// 建立Store
let store = createStore(
  todoReducerCreator(initTodoState),
  initTodoState,
  applyMiddleware(thunk, logger, crashReporter)
);


class ReduxFullApp extends Component {
  //啟動時,抓後端資料
  componentDidMount() {
    store.dispatch(fetchTodosFromServer());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <Title />
            <TodoForm />
            <TodoList />
        </div>
      </Provider>
    );
  }
}

export default ReduxFullApp;
