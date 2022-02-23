import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
  notCompleteTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  // const list = localStorage.getItem("list")
  //   ? JSON.parse(localStorage.getItem("list"))
  //   : [];

  // list.push(addTodos);
  // localStorage.setItem("list", JSON.stringify(list));
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
    notCompleteTodo: (obj) => dispatch(notCompleteTodos(obj)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  // const { storageList: list } = useSelector((state) => state.todoList);
  return (
    <div className="displaytodos">
      <div className="buttons">
        <button onClick={() => setSort("active")}> Active </button>
        <button onClick={() => setSort("completed")}> Completed </button>
        <button onClick={() => setSort("all")}> All </button>
      </div>
      <ul>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    updateTodo={props.updateTodo}
                    removeTodo={props.removeTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    updateTodo={props.updateTodo}
                    removeTodo={props.removeTodo}
                    notCompleteTodo={props.notCompleteTodo}
                  />
                )
              );
            })
          : null}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  updateTodo={props.updateTodo}
                  removeTodo={props.removeTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
