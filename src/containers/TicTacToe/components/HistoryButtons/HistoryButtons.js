import React from "react";
import ButtonContainer from "../../../../components/ButtonContainer";
import Button from "../../../../components/Button";
import P from "../../../../components/P";

const HistoryButtons = props => (
  <ButtonContainer>
    <Button history onClick={props.onHistoryBackClick} disabled={props.leftDisabled}> {"<"}</Button>
    <P> TIMETRAVEL </P>
    <Button history onClick={props.onHistoryNextClick} disabled={props.rightDisabled}> > </Button>
  </ButtonContainer>
);

export default HistoryButtons;
