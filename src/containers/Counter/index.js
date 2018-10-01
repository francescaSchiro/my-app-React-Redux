import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "./actions";
import CenterCounterWrapper from "./CenterCounterWrapper";
import CounterWrapper from "./CounterWrapper";
import P from "../../components/P";
import HR from "../../components/HR";
import Button from '../../components/Button';


class Counter extends React.Component {
  _reachedLimit = value => {
    return value === 10
      ? `You reached the top! GO BACK!`
      : value === -10
        ? `You hit rock bottom! GO UP! `
        : "Up or down?";
  };

  render() {
    return (
      <CenterCounterWrapper>
        <CounterWrapper>
          <HR />
          <P>{this.props.counterValue}</P>
          <Button
            onClick={this.props._decrement}
            disabled={this.props.leftDisabled}
          >
            -
          </Button>
          <Button
            onClick={this.props._increment}
            disabled={this.props.rightDisabled}
          >
            +
          </Button>
          <P>{this._reachedLimit(this.props.counterValue)}</P>
        </CounterWrapper>
      </CenterCounterWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    leftDisabled: state.count.leftDisabled,
    rightDisabled: state.count.rightDisabled,
    counterValue: state.count.counterValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _increment: () => {
      dispatch(increment());
    },
    _decrement: () => {
      dispatch(decrement());
    }
  };
};

const CounterHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterHOC;
