import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

import P from "../../../components/P";
import UL from "../../../components/UL";

const TodoList = ({
  todos,
  onTodoClick,
  onRemoveClick,
  onShowModalClick,
  onHideModalClick
}) => {
  return todos.length > 0 ? (
    <UL>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          {...todo}
          index={index}
          onClick={() => onTodoClick(todo)}
          onRemoveClick={() => onRemoveClick(todo)}
          onShowModalClick={() => onShowModalClick(index)}
          onHideModalClick={() => onHideModalClick(index)}
        />
      ))}
    </UL>
  ) : (
    <P noItems >no items in this list</P>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default TodoList;
