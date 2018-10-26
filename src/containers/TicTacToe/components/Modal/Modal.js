import React, { Component } from "react";
import ModalWrapper from "./ModalWrapper";
import P from "../../../../components/P";
import H1 from "../../../../components/H1";

export default class Modal extends Component {
  render() {
    const { isTurnX, onPlayAgainClick } = this.props;
    return (
      <ModalWrapper>
        <P> The winner is :</P>
        <H1
        style={{
          fontSize: "5em",
          paddingTop: ".5em"
          }}
          > {isTurnX ? "X" : "O"}
        </H1>
        <button onClick={() => onPlayAgainClick()}> Play again </button>
      </ModalWrapper>
    );
  }
}
