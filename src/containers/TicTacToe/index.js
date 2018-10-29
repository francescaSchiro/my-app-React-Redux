import React, { PureComponent, Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { compose } from "redux";
import { connect } from "react-redux";
import Wrapper from "./indexWrapper";
import Game from "./components/Game/Game";
import Modal from "./components/Modal/Modal";
import P from "../../components/P";
import { onBoxClick, resetState } from "./actions";
library.add(far);

class TicTacToe extends PureComponent {
  render() {
    const {
      boardValues,
      isTurnX,
      isThereWinner,
      onBoxClick,
      onPlayAgainClick
    } = this.props;
    return (
      <Fragment>
        {isThereWinner === "yes" ? (
          <Modal winner isTurnX={isTurnX} onPlayAgainClick={onPlayAgainClick} />
        ) : isThereWinner === "draw" ? (
          <Modal draw={"DRAW"} onPlayAgainClick={onPlayAgainClick} />
        ) : (
          <Wrapper>
            <P> Current player:{ isTurnX ? 
           "  X": "  O" }</P>
          
            <Game
              boardValues={boardValues}
              onBoxClick={onBoxClick}
              isTurnX={isTurnX}
            />
            
            
        
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


// <i className="fas fa-times"></i> 
// <i className="far fa-circle"></i>