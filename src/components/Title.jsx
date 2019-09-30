import React, { Component } from 'react';

import { connect } from 'react-redux';

// 待辦事項清單列表
class Title extends Component {
  constructor(props) {
    super(props);
    console.log('init..................');
    console.log(this.props.todos)

  }

// {this.props.isFetching ? '載入中' : this.props.todos.length}
  render() {
    return (
      <div>
        <div>
          <h1>
            用戶資料查詢 (狀態({getErrorMsg(this.props )}))
          </h1>
        </div>
      </div>
    );
  }
}

// Connect時候需要轉譯的Store state props

const getErrorMsg = props => {
  console.log('title',props.todos)
  if(!props.isFetching){
    switch(props.error) {
          case 401:
            return '找不到資源';
          case 404:
            return '找不到這頁資源';
          case 500:
            return '內部伺服器錯誤';
          case 200:
            if(!props.todos.length > 0){
              return '資料庫查無編號';
            }
            return props.todos.length;
          default:
            return 'Error';
         }
  }else{
      return '載入中';
  }
 
};

const mapStateToProps = state => {
  console.log('12345',state.todos)
  return {
    todos: state.todos,
    isFetching: state.isFetchingTodoList,
    error: state.error
  };

};

export default connect(mapStateToProps)(Title);
