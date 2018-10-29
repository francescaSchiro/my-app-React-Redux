import React, { PureComponent, Fragment } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { compose } from "redux";
import { connect } from "react-redux";
import Wrapper from "./indexWrapper";
import Game from "./components/Game/Game";
import Modal from "./components/Modal/Modal";
import P from "../../components/P";
import Button from "../../components/Button";
import { onBoxClick, resetState, pickSymbol } from "./actions";
library.add(far);

// function getComponentToRender(props) {
//   switch (props) {
//     case isThereWinner === "yes": {
//       return (
//         <Modal winner isTurnX={isTurnX} onPlayAgainClick={onPlayAgainClick} />
//       );
//     }
//     case isThereWinner === "draw": {
//       return <Modal draw={"DRAW"} onPlayAgainClick={onPlayAgainClick} />;
//     };
//     case pickedSymbol === false: {
//       return (
//         <Wrapper>
//           <P>Pick your symbol:</P>
//           <div>
//             <Button symbol onClick={() => pickSymbol("X")}>
//               X
//             </Button>{" "}
//             <Button
//               symbol
//               onClick={() => pickSymbol("O")}
//               style={{ display: "inline-block" }}
//             >
//               O
//             </Button>
//           </div>
//         </Wrapper>
//       );
//     };
//     default: {
//       return (
//         <Wrapper>
//           <P>
//             Current player:
//             {isTurnX ? "  X" : "  O"}
//           </P>

//           <Game
//             boardValues={boardValues}
//             onBoxClick={onBoxClick}
//             isTurnX={isTurnX}
//           />
//         </Wrapper>
//       );
//     };
//   }
// };
class TicTacToe extends PureComponent {
  render() {
    const {
      boardValues,
      isTurnX,
      isThereWinner,
      pickedSymbol,
      onBoxClick,
      onPlayAgainClick,
      pickSymbol
    } = this.props;

    return (
      <Fragment>
        {isThereWinner === "yes" ? (
          <Modal winner isTurnX={isTurnX} onPlayAgainClick={onPlayAgainClick} />
        ) : isThereWinner === "draw" ? (
          <Modal draw={"DRAW"} onPlayAgainClick={onPlayAgainClick} />
        ) : pickedSymbol === false ? (
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
        ) : (
          <Wrapper>
            <P>
              Current player: &nbsp;
              <span
                style={{
                  color:  "blueviolet",
                  backgroundColor: "rgba(245, 245, 245, .6)",
                  padding: "1em 1.3em",
                  borderRadius: "1em",
                }}
              >
                {isTurnX ? "X" : "O"}
              </span>
            </P>

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
    isThereWinner: state.tictactoe.isThereWinner,
    pickedSymbol: state.tictactoe.pickedSymbol
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onBoxClick: (i, isTurnX) => dispatch(onBoxClick(i, isTurnX)),
    onPlayAgainClick: () => dispatch(resetState()),
    pickSymbol: symbol => dispatch(pickSymbol(symbol))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(TicTacToe);

// <i className="fas fa-times"></i>
// <i className="far fa-circle"></i>
