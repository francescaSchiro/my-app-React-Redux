import React from "react";
import { connect } from "react-redux";

import { increment, incrementDelay, decrement } from "./actions";
import CenterCounterWrapper from "./CenterCounterWrapper";
import CounterWrapper from "./CounterWrapper";
import P from "../../components/P";
import HR from "../../components/HR";
import Button from "../../components/Button";

class Counter extends React.Component {
  _reachedLimit = value => {
    return value >= 20
      ? `You reached the top! GO BACK!`
      : value <= -5
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
          > - </Button>
          {[1, 2, 3].map((n, i) => (
            <Button
              style={{
                width: "90px"
              }}
              key={i}
              onClick={this.props._increment.bind(this, n)}
              disabled={this.props.rightDisabled}
            >+ {n}</Button>
          ))}

          <Button
            style={{
              width: "150px"
            }}
            onClick={this.props._incrementDelay.bind(this, 2000, 2)}
            disabled={this.props.rightDisabled}
          >
            + 2sec
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
    _increment: num => {
      dispatch(increment(num));
    },
    _incrementDelay: (delayTime, sumNum) => {
      dispatch(incrementDelay(delayTime, sumNum));
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
