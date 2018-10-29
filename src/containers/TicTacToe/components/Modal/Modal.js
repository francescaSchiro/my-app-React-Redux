import React, { Component } from "react";
import ModalWrapper from "./ModalWrapper";
import P from "../../../../components/P";
import H1 from "../../../../components/H1";
import Button from "../../../../components/Button";

export default class Modal extends Component {
  render() {
    const { isTurnX, onPlayAgainClick, draw, winner } = this.props;
    return (
      <ModalWrapper
        style={{
          backgroundImage: winner
            ? "url('https://media1.tenor.com/images/2f02ec9a2787ea228d32ec0948c36017/tenor.gif')"
            : draw
              ? "url('http://www.reactiongifs.com/r/2013/02/tied.gif')"
              : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <P style={{
            textShadow: "black 0 0 0.4em"
          }}> {draw ? "The game is" : "The winner is:"}</P>
        <H1
          style={{
            fontSize: "5em",
            paddingTop: ".5em",
            textShadow: "black 0 0 0.4em"
          }}
        >
          {draw ? `${draw}` : isTurnX ? "X" : "O"}
        </H1>
        <Button style={{
            boxShadow: "black 0 0 0.4em"
          }} playAgain onClick={() => onPlayAgainClick()}>
          Play again
        </Button>
      </ModalWrapper>
    );
  }
}
