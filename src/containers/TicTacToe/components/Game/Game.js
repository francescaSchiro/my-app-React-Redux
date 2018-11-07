import React, { Component } from "react";
import GameWrapper from "./GameWrapper";
import Box from "../Box/Box";

export default class Game extends Component {
  render() {
    const { boardValues, isTurnX, onBoxClick } = this.props;
    return (
      <GameWrapper>
        <Box
          boardValues={boardValues}
          onBoxClick={onBoxClick}
          isTurnX={isTurnX}
        />
      </GameWrapper>
    );
  }
}
