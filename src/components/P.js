import styled from "styled-components";

const P = styled.p`
  margin: 0;

  font-weight: bold;
  color: inherit;
  font-size: 1.2em;
  text-align: center;
  letter-spacing: 0.1em;

  text-shadow: ${props => (props.tictactoe ? "black 0 0 0.4em" : "none")};
  margin-bottom: ${props => (props.tictactoe ? ".1em" : "1em")};
`;

export default P;
