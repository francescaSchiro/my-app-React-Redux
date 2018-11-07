import styled from "styled-components";

const _getFontSize = props => {
  switch (true) {
    case props.counterValue:
      return "3em";
    case props.playAgain:
      return "5em";
    default:
      return "1.5em";
  }
};

const H1 = styled.h1`
  padding: 0;
  padding-bottom: ${props => (props.timerCount ? ".4em" : "0")};
  margin: 0;

  font-size: ${props => _getFontSize(props)};
  color: inherit;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-align: center;
  text-shadow: ${props => (props.tictactoe ? "black 0 0 0.4em" : "none")};
`;

export default H1;
