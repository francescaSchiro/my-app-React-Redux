import styled from "styled-components";

const _getButtonMargin = props => {
  switch (true) {
    case props.no:
      return "0 1em";
    case props.reset:
      return "1em .7em 1em 0";
    case props.counter:
      return "1em .7em 1em .7em";
    case props.playAgain:
      return "8em 0 0 0";
    case props.symbol:
      return "2em  1em";
    default:
      return "0";
  }
};

const _getButtonBg = props => {
  switch (true) {
    case props.no || props.symbol:
      return "#ed704d";
    case props.counter || props.reset:
      return "whitesmoke";
    default:
      return "#4e8bed";
  }
};

const _getButtonFontColor = props => {
  switch (true) {
    case props.counter:
      return "lightseagreen";
    case props.reset:
      return "lightsalmon";
    default:
      return "whitesmoke";
  }
};

const _getFontSize = props => {
  switch (true) {
    case props.counter || props.reset || props.playAgain:
      return "1.5em";
    case props.symbol:
      return "2em";
    default:
      return "inherit";
  }
};

const Button = styled.button`
  all: unset;

  display: inline-block;
  padding: ${props => (props.symbol ? "1em 1.3em" : "1.5em")};
  margin: ${props => _getButtonMargin(props)};
  border-radius: 1em;

  color: ${props => _getButtonFontColor(props)};
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: bold;
  font-size: ${props => _getFontSize(props)};
  letter-spacing: 0.05em;

  cursor: pointer;
  background-color: ${props => _getButtonBg(props)};
  box-shadow: ${props => (props.playAgain ? "black 0 0 0.4em" : "none")};

  &.focus {
    outline: 0;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
  }
  &:hover:not(:disabled) {
    box-shadow: 0px 0px 4px 1px whitesmoke;
    text-shadow: 0 0 3px white;
  }

  &.active {
    outline: 0;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.6;
  }
`;

export default Button;
