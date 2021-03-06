import React from "react";
import GameWrapper from "./GameWrapper";
import Box from "../Box/Box";

export default function Game(props) {
  return (
    <GameWrapper id="gameWrapper">
      <Box
        boardValues={props.boardValues}
        onBoxClick={props.onBoxClick}
        isTurnX={props.isTurnX}
        isTimeTravelActive={props.isTimeTravelActive}
      />
    </GameWrapper>
  );
}


// export default class Game extends Component {
//   render() {
//     const { boardValues, isTurnX, onBoxClick } = this.props;
//     return (
//       <GameWrapper>
//         <Box
//           boardValues={boardValues}
//           onBoxClick={onBoxClick}
//           isTurnX={isTurnX}
//         />
//       </GameWrapper>
//     );
//   }
// }