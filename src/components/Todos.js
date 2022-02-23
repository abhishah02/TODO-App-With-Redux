import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

// const getLocalItems = () => {
//   let list = localStorage.getItem("todos");
//   console.log(list);

//   if (list) {
//     return JSON.parse(localStorage.getItem("todos"));
//   } else {
//     return [];
//   }
// };

// const getLocalItems = JSON.parse(localStorage.getItem("todos") || "[]");

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todo));
  // }, [todo]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
      mapDispatchToProps();
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add();
        }}
      >
        <div className="addTodos">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="todo-input"
            value={todo}
          />
          <button className="add-btn" type="submit">
            {" "}
            +{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
