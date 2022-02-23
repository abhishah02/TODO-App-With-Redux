import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  SET_FILTER,
} from "../action-types/reducers";

let nextTodoId = 0;

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content,
    },
  };
};

export const updateTodo = (data) => {
  return {
    type: UPDATE_TODO,
    data,
  };
};

export const removeTodo = (data) => {
  return {
    type: REMOVE_TODO,
    data,
  };
};

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
