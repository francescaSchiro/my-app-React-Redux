import React, { Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import BoxWrapper from "./BoxWrapper";

library.add(far);

// const isOnClickDisabled = (isTimeTravelActive, n) => {
//   const {isTimeTravelActive} = this.props;
//   if (isTimeTravelActive) {
//     return null;
//   } else if (n === "") {
//     return props.onBoxClick(i, props.isTurnX);
//   } else {
//     return null;
//   }
// };


const Box = (props) => (
  
    <Fragment>
    {props.boardValues.map((n, i) => (
      <BoxWrapper
        isTimeTravelActive = {props.isTimeTravelActive}
        key={i}
        position={i + 1}
        // onClick = { isOnClickDisabled(props.isTimeTravelActive, n) }
        onClick={ 
          props.isTimeTravelActive ? null :
          n === "" ? () => props.onBoxClick(i, props.isTurnX) :
          null} //disable onClick when box is busy or when timetravelisActive
        
      >
        {n}
      </BoxWrapper>
    ))}
  </Fragment>
)


export default Box;