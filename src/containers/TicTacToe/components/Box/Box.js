import React, { Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import BoxWrapper from "./BoxWrapper";

library.add(far);


const Box = (props) => (
  
    <Fragment>
    {props.boardValues.map((n, i) => (
      <BoxWrapper
        key={i}
        position={i + 1}
        onClick={n === "" ? () => props.onBoxClick(i, props.isTurnX) : null} //disable onClick when box is busy
      >
        {n}
      </BoxWrapper>
    ))}
  </Fragment>
)


export default Box;