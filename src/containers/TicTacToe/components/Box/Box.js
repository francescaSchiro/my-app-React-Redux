import React, { Component, Fragment } from "react";
import BoxWrapper from "./BoxWrapper";


export default class Box extends Component {
  render() {
    const {
      boardValues,
      isTurnX,
      onBoxClick
    } = this.props;
    return (
      <Fragment>
        { boardValues.map((n, i) => (
          <BoxWrapper key={i}
          position={(i + 1)}
          onClick= { () => onBoxClick( i, isTurnX ) }
          // isTurnX={isTurnX}
          >
            {n}
          </BoxWrapper>
        ))}
      </Fragment>
    );
  }
}
