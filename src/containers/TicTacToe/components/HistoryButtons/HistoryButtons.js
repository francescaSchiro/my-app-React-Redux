import React, { Fragment } from "react";
import ButtonContainer from "../../../../components/ButtonContainer";
import Button from "../../../../components/Button";
import P from "../../../../components/P";

const HistoryButtons = props => (
  <Fragment>
    <ButtonContainer>
      <Button
        history
        onClick={props.onHistoryBackClick}
        disabled={props.leftDisabled}
      >
        {" "}
        {"<"}
      </Button>
      <P timetravel> TIMETRAVEL </P>
      <Button
        history
        onClick={props.onHistoryNextClick}
        disabled={props.rightDisabled}
      >
        {" "}
        >{" "}
      </Button>
    </ButtonContainer>
    <P isTimeTravelActive={props.isTimeTravelActive}>
      During TIMETRAVEL you can only see your moves. No click allowed.
    </P>
  </Fragment>
);

export default HistoryButtons;
