import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { reset } from "../Counter/actions";
import CounterSavedWrapper from "./CounterSavedWrapper";
import P from "../../components/P";
import H1 from "../../components/H1";
import HR from "../../components/HR";
import Button from "../../components/Button";

const GobackLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  border-right: transparent;
  @keyframes myAnimation {
    0% { border-right: 0 solid transparent };
    50% { border-right: 10px solid transparent };
    100% { border-right: 0 solid transparent };
  }

  &::before {
    content: "👈";
    margin-right: 4px;
  }
  &:hover {
    text-shadow: 0 0 3px white;
    animation: myAnimation 1s infinite;
    animation-timing-function: ease-in-out;
  }
`;

class CounterSaved extends React.Component {
  render() {
    return (
      <CounterSavedWrapper key="CounterSavedWrapper">
        <P> The value of the counter is </P>
        <HR />
        <H1 counterValue> {this.props.counterValue} </H1>
        <HR />
        <Button reset onClick={this.props._reset}>
          Reset counter
        </Button>
        <P>
          <GobackLink
            to={"/item1"}
            activeStyle={{
              textShadow: "0 0 3px white"
            }}
          >
            Go back to have superfun with the counter
          </GobackLink>
        </P>
      </CounterSavedWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    counterValue: state.count.counterValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _reset: () => {
      dispatch(reset());
    }
  };
};

const CounterSavedHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterSaved);

export default CounterSavedHOC;
