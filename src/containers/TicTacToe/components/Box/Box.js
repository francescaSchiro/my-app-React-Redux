import React, { Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import BoxWrapper from "./BoxWrapper";

library.add(far);

const isBoxActive = (isTimeTravelActive, n) => {
  return isTimeTravelActive === false && n === "";
}

const onClick = (isTimeTravelActive, isTurnX, onBoxClick, n, i) => {
  if (isBoxActive(isTimeTravelActive, n)) {
    return onBoxClick(i, isTurnX);
  } else {
    return null;
  }
};

const Box = props => (
  <Fragment>
    {props.boardValues.map((n, i) => (
      <BoxWrapper
        isTimeTravelActive={props.isTimeTravelActive}
        key={i}
        position={i + 1}
        isBoxActive={isBoxActive(props.isTimeTravelActive, n)}
        onClick={() => onClick(props.isTimeTravelActive, props.isTurnX, props.onBoxClick, n, i)}
      >
        {n}
      </BoxWrapper>
    ))}
  </Fragment>
);

export default Box;