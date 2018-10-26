import React, { PureComponent, Fragment } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Wrapper from "./indexWrapper";
import Game from "./components/Game/Game";
import Modal from "./components/Modal/Modal";
import P from "../../components/P";
import { onBoxClick, resetState } from "./actions";

class TicTacToe extends PureComponent {
  render() {
    const { boardValues, isTurnX, isThereWinner, onBoxClick, onPlayAgainClick } = this.props;
    return (
      <Fragment>
        { isThereWinner ? (
          <Modal isTurnX={isTurnX} onPlayAgainClick ={onPlayAgainClick} />
        ) : 
        // ( isThereWinner === undefined) ?
        //     ( <Modal isTurnX={isTurnX} onPlayAgainClick ={onPlayAgainClick} />) :
            (
          <Wrapper>
            <P> Make your move! </P>
            <Game
              boardValues={boardValues}
              onBoxClick={onBoxClick}
              isTurnX={isTurnX}
            />
            <P> Current player: {isTurnX ? "X" : "O"} </P>
          </Wrapper>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    boardValues: state.tictactoe.board,
    isTurnX: state.tictactoe.isTurnX,
    isThereWinner: state.tictactoe.isThereWinner
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onBoxClick: (i, isTurnX) => dispatch(onBoxClick(i, isTurnX)),
    onPlayAgainClick: () => dispatch(resetState())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(TicTacToe);
