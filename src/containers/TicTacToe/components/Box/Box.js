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
          <BoxWrapper
          key={i}
          position={(i + 1)}
          onClick= { n === "" ?
            () => onBoxClick( i, isTurnX ) : null } //disable onClick when box is busy
          >
            {n}
          </BoxWrapper>
        ))}
      </Fragment>
    );
  }
}
