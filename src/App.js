import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Header from "./components/Header/index";
import Routes from "./Routes";
import AppWrapper from "./AppWrapper";
import {
  todosFetchRequest,
  addTodo,
  toggleTodo,
  setFilterShowAll,
} from "./containers/ToDo/actions";

class App extends PureComponent {
  componentWillMount() {
    const { todosFetchRequest, setFilterShowAll } = this.props;
    todosFetchRequest();
    setFilterShowAll();
  }

  // componentDidMount() {
  //   const { todos, toggleTodo, setFilterShowAll} = this.props;
  //   toggleTodo(todos[1]);
  //   setFilterShowAll();
  // }
  render() {
    return (
      <AppWrapper key="AppWrapper">
        <Helmet
          titleTemplate="%s - this is my practice app"
          defaultTitle="my practice app"
        >
          <meta
            name="description:some React Boilerplate exercises"
            content="React exercises"
          />
        </Helmet>
        <Header />
        <Routes />
      </AppWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todoApp.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    todosFetchRequest: () => dispatch(todosFetchRequest()),
    addTodo: todo => dispatch(addTodo(todo)),
    toggleTodo: todo => dispatch(toggleTodo(todo)),
    setFilterShowAll: () => dispatch(setFilterShowAll())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withRouter,
  withConnect
)(App);
