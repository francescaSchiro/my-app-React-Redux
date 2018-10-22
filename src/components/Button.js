import styled from "styled-components";

function getButtonMargin(props) {
  if (props.no) {
    return "0 1em";
  } else if (props.reset) {
    return "1em 0 1em 0";
  } else if (props.counter) {
    return ".7em .7em .7em 0";
  } else {
    return "0";
  }
}

function getButtonBg(props) {
  if (props.no) {
    return "#ed704d";
  } else if (props.counter) {
    return "whitesmoke";
  } else {
    return "#4e8bed";
  }
}

const Button = styled.button`
  background-color: ${props => getButtonBg(props)};
  font-family: inherit;
  font-weight: bold;
  font-size: ${props => (props.counter ? "1.5em" : "inherit")};
  letter-spacing: 0.05em;
  border-radius: 1em;
  border: none;
  color: ${props => (props.counter ? "lightseagreen" : "whitesmoke")};
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
