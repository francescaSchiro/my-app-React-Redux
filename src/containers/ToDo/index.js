import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  todosFetchRequest,
  setFilterShowAll,
  setFilterShowCompleted,
  setFilterShowActive,
  toggleTodo,
  removeTodo,
  showModal,
  hideModal,
  addTodo
} from "./actions";

import ToDoWrapper from "./ToDoWrapper";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";

import filters from "./filters";

class ToDo extends PureComponent {
  componentWillMount() {
    const {
      todosFetchRequest,
      match: { params },
      setFilterShowAll
    } = this.props;
    const itemsNumber =
      params.todosNum && params.todosNum > 0 ? params.todosNum : -1;
    todosFetchRequest(itemsNumber);
    setFilterShowAll();
  }

  render() {
    const {
      todos,
      currentFilter,
      onTodoClick,
      onRemoveClick,
      onHideModalClick,
      onShowModalClick,
      onFilterClick,
      onAddTodoClick,
      todosFetchRequest,
      match: {
        params: { todosNum }
      }
    } = this.props;
    return (
      <ToDoWrapper key="ToDoWrapper">
        <AddTodo
          todosNum={todosNum}
          onAddTodoClick={onAddTodoClick}
          todosFetchRequest={todosFetchRequest}
        />
        <TodoList
          todos={todos}
          onTodoClick={onTodoClick}
          onHideModalClick={onHideModalClick}
          onShowModalClick={onShowModalClick}
          onRemoveClick={onRemoveClick}
        />
        <Footer currentFilter={currentFilter} onFilterClick={onFilterClick} />
      </ToDoWrapper>
    );
  }
}

const getVisibleTodos = (todos, filterName) => {
  switch (filterName) {
    case "COMPLETED":
      return todos.filter(t => t.completed);
    case "ACTIVE":
      return todos.filter(t => !t.completed);
    case "ALL":
    default:
      return todos;
  }
};

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(
      state.todoApp.todos,
      state.todoApp.visibilityFilter.filterName
    ),
    currentFilter: state.todoApp.visibilityFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    todosFetchRequest: itemsNumber => dispatch(todosFetchRequest(itemsNumber)),
    setFilterShowAll: () => dispatch(setFilterShowAll()),
    onTodoClick: todo => dispatch(toggleTodo(todo)),
    onRemoveClick: todo => dispatch(removeTodo(todo)),
    onShowModalClick: index => dispatch(showModal(index)),
    onHideModalClick: index => dispatch(hideModal(index)),
    onFilterClick: filter => {
      switch (filter) {
        case filters[0]: {
          return dispatch(setFilterShowAll());
        }
        case filters[1]: {
          return dispatch(setFilterShowCompleted());
        }
        case filters[2]: {
          return dispatch(setFilterShowActive());
        }
        default:
          console.log("filtro non gestito");
          return;
      }
    },
    onAddTodoClick: (toso, todosNum) => dispatch(addTodo(toso, todosNum))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ToDo);
