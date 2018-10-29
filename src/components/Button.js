import styled from "styled-components";

function getButtonMargin(props) {
  if (props.no) {
    return "0 1em";
  } else if (props.reset || props.counter) {
    return "1em .7em 1em 0";
  } else if (props.playAgain) {
    return "6em  0";
  } else {
    return "0";
  }
}

function getButtonBg(props) {
  if (props.no) {
    return "#ed704d";
  } else if (props.counter || props.reset) {
    return "whitesmoke";
  } else {
    return "#4e8bed";
  }
}

function getButtonFontColor(props) {
  if (props.counter) {
    return "lightseagreen";
  } else if (props.reset) {
    return "lightsalmon";
  } else {
    return "whitesmoke";
  }
}

const Button = styled.button`
  all: unset;

  background-color: ${props => getButtonBg(props)};
  font-family: inherit;
  font-weight: bold;
  font-size: ${props =>
    props.counter || props.reset || props.playAgain ? "1.5em" : "inherit"};
  letter-spacing: 0.05em;
  border-radius: 1em;
  border: none;
  color: ${props => getButtonFontColor(props)};
  padding: 1em;
  margin: ${props => getButtonMargin(props)};
  width: fit-content;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  /* non toglie bordo blue di chrome quando clicco!!!!!!!! */
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
  :disabled {
    opacity: 0.6;
  }
`;

export default Button;
