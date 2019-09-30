import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo,fetchTodosOneFromServer,removeAllTodo } from '../actions';

// 待辦事項清單列表
class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let input = undefined;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.removeAllTodo();
          this.props.fetchTodosOneFromServer(input.value);
          console.log('1.input.....',input.value);
          input.value = '';
        }}
      >
        <input
          className="form-control col-md-12"
          ref={node => {
            input = node;
          }}
        />
        <button onclick={e => {
          e.preventDefault();
          this.props.removeAllTodo();
          this.props.fetchTodosOneFromServer(input.value);
          input.value = '';
        }}>用戶編號查詢(無輸入則查詢全部)</button>
        <br />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    },
    removeAllTodo: () =>{
      dispatch(removeAllTodo());
    },
    fetchTodosOneFromServer: (id) =>{
      dispatch(fetchTodosOneFromServer(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
