import styled from "styled-components";

function getColumnStart(position) {
  switch (position) {
    case 1:
    case 4:
    case 7: {
      return 1;
    }
    case 2:
    case 5:
    case 8: {
      return 2;
    }
    case 3:
    case 6:
    case 9: {
      return 3;
    }
    default: {
      return console.log("position column undefined");
    }
  }
}

function getRowStart(position) {
  switch (position) {
    case 1:
    case 2:
    case 3: {
      return 1;
    }
    case 4:
    case 5:
    case 6: {
      return 2;
    }
    case 7:
    case 8:
    case 9: {
      return 3;
    }
    default: {
      return console.log("position row undefined");
    }
  }
}

const BoxWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor:pointer;

  grid-column-start: ${props => getColumnStart(props.position)};
  grid-row-start: ${props => getRowStart(props.position)};
  justify-self: stretch;

  background-color: blueviolet;
  /* border: 3px solid whitesmoke;
  border-radius: 10px; */
  font-size: 2em;
  font-family: inherit;
  color: whitesmoke;
`;

export default BoxWrapper;
