import React from "react";
import ButtonContainer from "../../../../components/ButtonContainer";
import Button from "../../../../components/Button";
import P from "../../../../components/P";

const HistoryButtons = props => (
  <ButtonContainer>
    <Button history> ← </Button>
    <P> TIMETRAVEL </P>
    <Button history> → </Button>
  </ButtonContainer>
);

export default HistoryButtons;
