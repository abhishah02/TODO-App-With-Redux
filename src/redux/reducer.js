import { createSlice } from "@reduxjs/toolkit";

const initialList = () => {
  const todo = localStorage.getItem("list");
  var list = [];
  if (todo) {
    list = JSON.parse(list);
  }
  return list;
};

const initialState = {
  todoList: initialList(),
};

// if (localStorage.getItem("list")) {
//   initialState.todoList = JSON.parse(localStorage.getItem("list"));
// } else {
//   initialState.todoList = [];
// }

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      localStorage.setItem(
        "list",
        JSON.stringify(action.payload, ...state.todoList)
      );
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
      };
    },
    //remove todos
    removeTodos: (state, action) => {
      const removedTodo = state.todoList.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("list", JSON.stringify(removedTodo));
      return {
        ...state,
        todoList: removedTodo,
      };
    },
    //update todos
    updateTodos: (state, action) => {
      const updatedTodo = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
      localStorage.setItem("list", JSON.stringify(updatedTodo));
      return {
        todoList: updatedTodo,
      };
    },
    //completed
    completeTodos: (state, action) => {
      const completedTodo = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
      localStorage.setItem("list", JSON.stringify(completedTodo));
      return {
        todoList: completedTodo,
      };
    },
    notCompleteTodos: (state, action) => {
      const notCompletedTodo = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: false,
          };
        }
        return todo;
      });
      localStorage.setItem("list", JSON.stringify(notCompletedTodo));
      return {
        todoList: notCompletedTodo,
      };
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
  notCompleteTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
