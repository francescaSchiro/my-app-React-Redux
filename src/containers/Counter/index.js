import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { increment, incrementDelay, decrement } from "./actions";
import CounterWrapper from "./CounterWrapper";
import P from "../../components/P";
import H1 from "../../components/H1";
import HR from "../../components/HR";
import Button from "../../components/Button";

/**
* Represents the Counter
* @constructor
* @param  { number } counterValue
* @param  { function } _decrement 
* @param  { function } _increment  
* @param  { boolean } leftDisabled
* @param  { boolean } rightDisabled
*/
class Counter extends PureComponent {
  
  _reachedLimit = value => {
  switch (true) {
      case value >= 20:
        return "You reached the top! GO BACK!";
      case value <= -5:
        return "You hit rock bottom! GO UP!";
      default:
        return "Up or down?";
    }
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
      <CounterWrapper>
        <div>
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
              onClick={() => _increment(n)}
              disabled={rightDisabled}
            >
              +{n}
            </Button>
          ))}

          <Button
            counter
            onClick={() => _incrementDelay(2000, 2)}
            disabled={rightDisabled}
          >
            +2sec
          </Button>
          <P>{this._reachedLimit(counterValue)}</P>
        </div>
      </CounterWrapper>
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
    /**
     * @param  { number } num
     * @param  {function} _increment: 
     * @returns  { function } => { dispatch(increment(num))}
     * @param  {function} increment that takes num as parameter
     */ 
    
    _increment: num => {
      dispatch(increment(num));
    },
    /**
     * @param  { number } delayTime in milliseconds
     * @param  { number } sumNum
     * @param  { function } =>{ dispatch(incrementDelay(delayTime, sumNum) }
     */
    _incrementDelay: (delayTime, sumNum) => {
      dispatch(incrementDelay(delayTime, sumNum));
    },
    /**
     * @param  { function } =>{dispatch(decrement())}
     */
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
