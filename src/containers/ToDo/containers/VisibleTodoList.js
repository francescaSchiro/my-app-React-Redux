import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../actions";

import TodoList from "../components/TodoList";
import filters from "../filters";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filters.COMPLETED:
      return todos.filter(t => t.completed);
    case filters.ACTIVE:
      return todos.filter(t => !t.completed);
    case filters.ALL:
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: todo => {
      dispatch(toggleTodo(todo));
    },
    onRemoveClick: todo => {
      dispatch(removeTodo(todo));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
