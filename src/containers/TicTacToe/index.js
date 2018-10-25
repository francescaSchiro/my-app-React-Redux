import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Wrapper from "./indexWrapper";
import Game from "./components/Game/Game";
import P from "../../components/P";
import {
  onBoxClick
} from "./actions";

class TicTacToe extends PureComponent {
  
  render(){
    const {
      boardValues,
      isTurnX,
      onBoxClick,
    } = this.props;
    return(
      <Wrapper>
        <P> Make your move! </P>
        <Game boardValues={ boardValues } onBoxClick= { onBoxClick } isTurnX={isTurnX} />
        <P> Current player: "getCurrentPlayer(X || O)" </P>
      </Wrapper>
    );
  }
};

function mapStateToProps(state) {
  return {
    boardValues: state.tictactoe.board,
    isTurnX: state.tictactoe.turn.isTurnX
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onBoxClick: (i, isTurnX) => dispatch(onBoxClick(i, isTurnX)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(TicTacToe);