import React, { Component } from 'react';

import {
  TodoItem,
  FlexContainer,
  Clickable,
  TodoText
} from '../StyledComponents';

// 待辦事項清單列表
class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoItem>
        <FlexContainer>
          <Clickable
            onClick={() => {
              this.props.remove(this.props.todo.id);
            }}
          >
            <TodoText>
              {this.props.todo.name}
            </TodoText>
          </Clickable>

        </FlexContainer>
      </TodoItem>
    );
  }
}

export default Todo;
