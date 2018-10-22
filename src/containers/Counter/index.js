import React from "react";
import { connect } from "react-redux";

import { increment, incrementDelay, decrement } from "./actions";
import CenterCounterWrapper from "./CenterCounterWrapper";
import CounterWrapper from "./CounterWrapper";
import P from "../../components/P";
import H1 from "../../components/H1";
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
    const {
      counterValue,
      _decrement,
      _increment,
      leftDisabled,
      rightDisabled,
      _incrementDelay
    } = this.props;
    return (
      <CenterCounterWrapper>
        <CounterWrapper>
          <P>I'm a counter</P>
          <HR />
          <H1 counterValue>{counterValue}</H1>
          <HR />
          <Button counter onClick={_decrement} disabled={leftDisabled}>
            -1
          </Button>
          {[1, 2, 3].map((n, i) => (
            <Button
              counter
              key={i}
              onClick={_increment.bind(this, n)}
              disabled={rightDisabled}
            >
              +{n}
            </Button>
          ))}

          <Button
            counter
            onClick={_incrementDelay.bind(this, 2000, 2)}
            disabled={rightDisabled}
          >
            +2sec
          </Button>
          <P 
          >
            {this._reachedLimit(counterValue)}
          </P>
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
