import React, { Component } from "react";
import ModalWrapper from "./ModalWrapper";
import P from "../../../../components/P";
import H1 from "../../../../components/H1";
import Button from "../../../../components/Button";

export default class Modal extends Component {

  render() {
    const { isTurnX, onPlayAgainClick, draw, winner } = this.props;
    return (
      <ModalWrapper draw={draw} winner={winner}>
        <P tictactoe> {draw ? "The game is" : "The winner is:"}</P>
        <H1
          style={{
            fontSize: "5em",

            textShadow: "black 0 0 0.4em"
          }}
        >
          {draw ? `DRAW` : isTurnX ? "X" : "O"}
        </H1>
        <Button
          style={{
            boxShadow: "black 0 0 0.4em"
          }}
          playAgain
          onClick={() => onPlayAgainClick()}
        >
          Play again
        </Button>
      </ModalWrapper>
    );
  }
}
