import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import ToDoWrapper from "./ToDoWrapper";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import filters from "./filters";

import {
  todosFetchRequest,
  setFilterShowAll,
  toggleTodo,
  removeTodo,
  showModal,
  hideModal
} from "./actions";

class ToDo extends PureComponent {
  componentWillMount() {
    const {
      onHideModalClick,
      todosFetchRequest,
      match: { params },
      setFilterShowAll
    } = this.props;
    const itemsNumber =
      params.todosNum && params.todosNum > 0 ? params.todosNum : -1;
    todosFetchRequest(itemsNumber);
    setFilterShowAll();
  };

  render() {
    const {
      todos,
      show,
      onTodoClick,
      onRemoveClick,
      onShowModalClick,
      onHideModalClick,
      match: {
        params: { todosNum }
      }
    } = this.props;
    return (
      <ToDoWrapper key="ToDoWrapper">
        <AddTodo todosNum={todosNum} />
        <Footer />
        <TodoList
          todos={todos}
          show= {show}
          onTodoClick={onTodoClick}
          onHideModalClick={onHideModalClick}
          onShowModalClick={onShowModalClick}
          onRemoveClick={onRemoveClick}
        />
      </ToDoWrapper>
    );
  }
}

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

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter),
    show: state.todoApp.modal.show
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    todosFetchRequest: itemsNumber => dispatch(todosFetchRequest(itemsNumber)),
    setFilterShowAll: () => dispatch(setFilterShowAll()),
    onTodoClick: todo => dispatch(toggleTodo(todo)),
    onRemoveClick: todo => dispatch(removeTodo(todo)),
    onShowModalClick: () => dispatch(showModal()),
    onHideModalClick: () => dispatch(hideModal()),

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ToDo);

//BEFORE in TodoApp
//tying all the containers together within a component
//---> next we need to pass the store.
// All container components need access to the Redux store so they can subscribe to it.(dispatch action)
// One option would be to pass it as a prop to every container component.
// However it gets tedious, as you have to wire store even through presentational components just because they happen to render a container deep in the component tree.alert
// The option we RECCOMEND is to use a special React Redux component called
// <Provider> to magically make the store available to all container components in the application without passing it explicitly.
// You only need to use it once when you render the root commponent (>>>> see index.js in ToDo)
