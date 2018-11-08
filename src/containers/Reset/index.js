import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { reset } from "../Counter/actions";
import ResetWrapper from "./ResetWrapper";
import P from "../../components/P";
import H1 from "../../components/H1";
import HR from "../../components/HR";
import Button from "../../components/Button";

const GobackLink = styled(NavLink)`
  display: inline-block;
  border-right: transparent;

  color: inherit;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
  letter-spacing: 0.05em;

  &::before {
    content: "👈";
    float: left;
    margin: -3px 5px 0 0;
  }
  &:hover {
    text-shadow: 0 0 3px white;
    animation: myAnimation 1s infinite;
    animation-timing-function: ease-in-out;
  }
  @keyframes myAnimation {
    0% {
      border-right: 0 solid transparent;
    }
    50% {
      border-right: 10px solid transparent;
    }
    100% {
      border-right: 0 solid transparent;
    }
  }
`;

class Reset extends React.Component {
  render() {
    const { counterValue, _reset } = this.props;
    return (
      <ResetWrapper key="CounterSavedWrapper">
        <P> The value of the counter is </P>
        <HR />
        <H1 counterValue> {counterValue} </H1>
        <HR />
        <Button reset onClick={_reset}>
          Reset counter
        </Button>
        <GobackLink
          to={"/counter"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
        >
          Go back to have superfun with the counter
        </GobackLink>
      </ResetWrapper>
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

const ResetHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset);

export default ResetHOC;
