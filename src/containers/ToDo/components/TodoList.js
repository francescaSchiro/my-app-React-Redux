/*
*   Presentational component. Represents the list of items in the TodoList
*   >>> {text, completed, onClick()}
*/

import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

import P from "../../../components/P";
import UL from "../../../components/UL";

const TodoList = ({todos, onTodoClick, onRemoveClick}) => {
  return todos.length > 0 ? (
    <UL>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          {...todo}
          onClick={() => onTodoClick(todo)}
          onRemoveClick={() => onRemoveClick(todo)}
        /> // al click fai  onTodoClick: index => {
        // onTodoClick = index => dispatch(toggleTodo(index))
      ))}
    </UL>
  ) : (
    <P>no items in this list</P>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default TodoList;
