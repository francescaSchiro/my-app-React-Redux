import React, { PureComponent, Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { compose } from "redux";
import { connect } from "react-redux";
import Wrapper from "./indexWrapper";
import Game from "./components/Game/Game";
import Modal from "./components/Modal/Modal";
import HistoryButtons from "./components/HistoryButtons/HistoryButtons";
import Span from "./components/Span";
import P from "../../components/P";
import Button from "../../components/Button";
import {
  onBoxClick,
  resetState,
  pickSymbol,
  loadPreviousHistoryBoard,
  loadNextHistoryBoard
} from "./actions";
library.add(far);

class TicTacToe extends PureComponent {
  getCurrentPlayerJsx() {
    const {
      boardValues,
      isTurnX,
      onBoxClick,
      onHistoryBackClick,
      onHistoryNextClick,
      leftDisabled,
      rightDisabled,
      isTimeTravelActive
    } = this.props;
    return (
      <Wrapper isTimeTravelActive={isTimeTravelActive}>
        <P game>
          Current player: &nbsp;
          <Span>{isTurnX ? "X" : "O"}</Span>
        </P>
        <Game
          boardValues={boardValues}
          onBoxClick={onBoxClick}
          isTurnX={isTurnX}
          isTimeTravelActive={isTimeTravelActive}
        />
        <HistoryButtons
          onHistoryBackClick={onHistoryBackClick}
          onHistoryNextClick={onHistoryNextClick}
          leftDisabled={leftDisabled}
          rightDisabled={rightDisabled}
          isTimeTravelActive={isTimeTravelActive}
        />
      </Wrapper>
    );
  }

  getStartJsx() {
    const { pickSymbol } = this.props;
    return (
      <Wrapper>
        <P>Pick your symbol:</P>
        <div>
          <Button symbol onClick={() => pickSymbol("X")}>
            X
          </Button>{" "}
          <Button
            symbol
            onClick={() => pickSymbol("O")}
            style={{ display: "inline-block" }}
          >
            O
          </Button>
        </div>
      </Wrapper>
    );
  }

  getWinnerJsx() {
    const { isTurnX, onPlayAgainClick, isThereWinner } = this.props;
    return (
      <Modal
        isThereWinner={isThereWinner}
        isTurnX={isTurnX}
        onPlayAgainClick={onPlayAgainClick}
      />
    );
  }

  getLoserJsx() {
    const { pickedSymbol } = this.props;
    return pickedSymbol ? this.getCurrentPlayerJsx() : this.getStartJsx();
  }

  getDrawJsx() {
    const { onPlayAgainClick, isTurnX, isThereWinner } = this.props;
    return (
      <Modal
        isThereWinner={isThereWinner}
        isTurnX={isTurnX}
        onPlayAgainClick={onPlayAgainClick}
      />
    );
  }

  render() {
    const { isThereWinner } = this.props;

    return (
      <Fragment>
        {(() => {
          switch (isThereWinner) {
            case null:
              return this.getDrawJsx();
            case true:
              return this.getWinnerJsx();
            case false:
              return this.getLoserJsx();
            default:
              return console.log("ERROR: no case detected to render");
          }
        })()}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    boardValues: state.tictactoe.board,
    isTurnX: state.tictactoe.isTurnX,
    isThereWinner: state.tictactoe.isThereWinner,
    pickedSymbol: state.tictactoe.pickedSymbol,
    leftDisabled: state.tictactoe.leftDisabled,
    rightDisabled: state.tictactoe.rightDisabled,
    isTimeTravelActive: state.tictactoe.isTimeTravelActive
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onBoxClick: (i, isTurnX) => dispatch(onBoxClick(i, isTurnX)),
    onPlayAgainClick: () => dispatch(resetState()),
    pickSymbol: symbol => dispatch(pickSymbol(symbol)),
    onHistoryBackClick: () => dispatch(loadPreviousHistoryBoard()),
    onHistoryNextClick: () => dispatch(loadNextHistoryBoard())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(TicTacToe);

// <i className="fas fa-times"></i>
// <i className="far fa-circle"></i>
