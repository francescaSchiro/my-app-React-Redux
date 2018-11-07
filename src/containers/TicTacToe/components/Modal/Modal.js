import React, { Component } from "react";
import ModalWrapper from "./ModalWrapper";
import P from "../../../../components/P";
import H1 from "../../../../components/H1";
import Button from "../../../../components/Button";

export default class Modal extends Component {
  _getParText = () => {
    const { isThereWinner } = this.props;
    return isThereWinner ? "The winner is:" : "The game is";
  };

  _getRightSymbol = () => {
    const { isTurnX } = this.props;
    return isTurnX ? "X" : "O";
  };

  _getH1Text = () => {
    const { isThereWinner } = this.props;
    return isThereWinner ? this._getRightSymbol() : `DRAW`;
  };

  render() {
    const { onPlayAgainClick, isThereWinner } = this.props;
    return (
      <ModalWrapper isThereWinner={isThereWinner}>
        <P playAgain> {this._getParText()} </P>
        <H1 playAgain> {this._getH1Text()} </H1>
        <Button playAgain onClick={() => onPlayAgainClick()}>
          Play again
        </Button>
      </ModalWrapper>
    );
  }
}
