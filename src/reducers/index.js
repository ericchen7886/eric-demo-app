import actionTypes from '../actions/actionTypes';

const reducers = {
  [actionTypes.removeAllTodo]: function(state, action ) {
    return removeAllTodo(state, action );
  },
  [actionTypes.addTodo]: function(state, action ) {
    return addTodo(state, action );
  },
  [actionTypes.removeTodo]: function(state, action ) {
    return removeTodo(state, action );
  },
  [actionTypes.beginFetchTodoList]: function(state, action ) {
    return beginFetchTodoList(state, action);
  },
  [actionTypes.finishFetchTodoList]: function(state, action ) {
    return finishFetchTodoList(state, action );
  },
  [actionTypes.recvFetchTodoListResult]: function(state, action ) {
    return recvFetchTodoListResult(state, action);
  }
};

export default function createReducers(initialState) {
  console.log('init...',initialState)
  return function reducer(state = initialState, action) {
    console.log('reducer action',action.type)
    if (reducers.hasOwnProperty(action.type)) {
      return  reducers[action.type](state, action);
    } else {
      return state;
    }
  };
}

export const removeAllTodo = (state, action) => {
	const newTodos = [];
  return Object.assign({}, state, { todos: newTodos });
};

const addTodo = (state, action) => {

  const newTodos = [
    ...state.todos,
    {
      id: action.payload.id,
      name: action.payload.name
    }
  ];

  return Object.assign({}, state, { todos: newTodos });
};

const removeTodo = (state, action ) => {
  const newTodos = state.todos.filter(todo => {
    return todo.id !== action.payload.id;
  });

  return Object.assign({}, state, { todos: newTodos  });
};

const beginFetchTodoList = (state, action ) => {
  console.log('beginFetchTodoList.....');
  // 若已經在載入資料了，無須異動state
  if (state.isFetchingTodoList){
    return state;
  } 
  return Object.assign({}, state, { 
    isFetchingTodoList: true  
  });
};

const finishFetchTodoList = (state, action ) => {
  // 若已經沒有在載入資料，無須異動state
  console.log('finishFetchTodoList.....');

  if (!state.isFetchingTodoList) {
    return state;
  }
  return Object.assign({}, state, { 
    isFetchingTodoList: false  ,
    error: action.payload.error
  });
};

const recvFetchTodoListResult = (state, action ) => {
  console.log('recvFetchTodoListResult.....');
  // 若載入資料無內容，無須異動state
  if (
    !action.payload ||
    !action.payload.todos ||
    action.payload.todos.length == 0
  ){
    return state;
  }
  const newTodos = [...state.todos, ...action.payload.todos]; 
  return Object.assign({}, state, { todos: newTodos  }); 
};
