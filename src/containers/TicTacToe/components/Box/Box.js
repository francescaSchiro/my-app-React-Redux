import React, { Component, Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import BoxWrapper from "./BoxWrapper";

library.add(far);


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
            { n }
          </BoxWrapper>
        ))}
      </Fragment>
    );
  }
}


// { n = "X" ? 
//             <i className="fas fa-times"></i> :
//             <i className="far fa-circle"></i> }