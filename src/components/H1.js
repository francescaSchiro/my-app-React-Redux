import styled from "styled-components";

const H1 = styled.h1`
  padding: 0;
  padding-bottom: ${props => (props.timerCount ? ".4em" : "0")};
  margin: 0;

  font-size: ${props => (props.counterValue ? "3em" : "1.5em")};
  color: inherit;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-align: center;
`;

export default H1;
