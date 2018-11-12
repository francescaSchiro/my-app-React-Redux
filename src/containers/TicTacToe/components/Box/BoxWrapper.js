import styled from "styled-components";

const getColumnStart = position => {
  switch (position) {
    case 1:
    case 4:
    case 7:
      return 1;
    case 2:
    case 5:
    case 8:
      return 2;
    case 3:
    case 6:
    case 9:
      return 3;
    default:
      return console.log("position column undefined");
  }
};

const getRowStart = position => {
  switch (position) {
    case 1:
    case 2:
    case 3:
      return 1;
    case 4:
    case 5:
    case 6:
      return 2;
    case 7:
    case 8:
    case 9:
      return 3;
    default:
      return console.log("position row undefined");
  }
};

const BoxWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: ${props => (props.onClick ? "pointer" : "default")};

  grid-column-start: ${props => getColumnStart(props.position)};
  grid-row-start: ${props => getRowStart(props.position)};
  justify-self: stretch;

  color: whitesmoke;
  font-size: 2em;
  font-family: inherit;

  background-color: ${props =>
    props.isTimeTravelActive ? "#764e80" : "blueviolet"};
    
  &:hover {
    background-color: ${props =>
      props.onClick ? "rgba(138, 43, 226, 0.9)" : "null"};
    transition: background-color 0.2s ease-in-out;
  }
`;

export default BoxWrapper;
