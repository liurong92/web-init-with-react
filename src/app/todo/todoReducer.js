import axios from 'axios';
import config from '../../../config/env';

export const INIT_TODO_LIST = 'cutOrders/initTodoList';

const initialState = {
  todoList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_TODO_LIST:
      return {
        ...state,
        todoList: action.todoList.data
      };

    default:
      return state
  }
}

export const getTodoList = () => (dispatch) => {
  return axios({
    method: 'get',
    url: `${config.api.target}/api/todo`,
    headers: {
      'Content-type': 'application/json'
    }
  }).then((response) => {
    dispatch({
      type: INIT_TODO_LIST,
      todoList: response.data
    });
  });
};
