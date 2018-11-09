import React from "react";
import ButtonContainer from "../../../../components/ButtonContainer";
import Button from "../../../../components/Button";
import P from "../../../../components/P";

const HistoryButtons = props => (
  <ButtonContainer>
    <Button history onClick={props.onHistoryBackClick}> {"<"}</Button>
    <P> TIMETRAVEL </P>
    <Button history onClick={props.onHistoryNextClick}> > </Button>
  </ButtonContainer>
);

export default HistoryButtons;
