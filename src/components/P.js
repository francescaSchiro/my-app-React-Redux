import styled from "styled-components";

const _getMargin = props => {
  switch (true) {
    case props.playAgain:
      return "0 0 .1em 0";
    case props.todoP:
      return "0";
    case props.modalP:
      return "0 0 2em 0";
    default:
      return "0 0 .1em 0";
  }
};

const _getFontColor = props => {
  switch (true) {
    case props.todoP:
      return "#ed704d";
    case props.modalP:
      return "#4e8bed";
    default:
      return "inherit";
  }
};

const P = styled.p`
  margin: ${props => _getMargin(props)};

  color: ${props => _getFontColor(props)};
  letter-spacing: 0.1em;
  text-align: ${props => (props.todoP ? "left" : "center")};
  font-size: 1.2em;
  text-shadow: ${props => (props.playAgain ? "black 0 0 0.4em" : "none")};
  font-style: ${props => (props.noItems ? "italic" : "inherit")};
  font-weight: ${props => (props.noItems ? "normal" : "bold")};
  flex-grow: ${props => (props.todoP ? "1" : "none")};

  text-decoration: ${props => (props.completed ? "line-through" : "none")};
  display: ${props => (props.todoP ? "inline-block" : "block")};
  line-height: ${props => (props.todoP ? "2em" : "inherit")};

  cursor: ${props => (props.todoP ? "pointer" : "default")};
`;

export default P;
