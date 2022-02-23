import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
} from "../action-types/reducers";

const initialState = {
  allIds: [],
  byIds: {},
};

export const reducerUse = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case UPDATE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    }

    case COMPLETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }

    case REMOVE_TODO: {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return {
        ...state,
      };
  }
};
