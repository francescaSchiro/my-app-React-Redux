import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { reset } from "../Counter/actions";
import CounterSavedWrapper from "./CounterSavedWrapper";
import P from "../../components/P";
import H1 from "../../components/H1";
import ButtonReset from "../../components/ButtonReset";

const GobackLink = styled(NavLink)`
  font-weight: bold;
  letter-spacing: 0.5px;
  color: whitesmoke;
  text-decoration: none;

  ::before {
    content: "👈";
    margin-right: 4px;
    font-size: 1.2rem;
  }
  :hover {
    text-shadow: 0 0 3px white;
    margin-right: 4px;
  }
`;

class CounterSaved extends React.Component {
  render() {
    return (
      <CounterSavedWrapper key="CounterSavedWrapper">
        <P> The value of the counter was </P>
        <H1
          style={{
            fontWeight: "bold",
            color: "#4e8bed"
          }}
        >
          {" "}
          {this.props.counterValue}{" "}
        </H1>
        <ButtonReset onClick={this.props._reset}>Reset counter</ButtonReset>
        <P>
          <GobackLink to="/item1">
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
