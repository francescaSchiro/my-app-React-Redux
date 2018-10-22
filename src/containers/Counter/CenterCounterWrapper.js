import styled from "styled-components";

const CenterCounterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  padding-top: 3em;
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  background-color: lightseagreen;
  height: 100vh;
  color: whitesmoke;
  flex: 1;


  /* ::before {
    content: "I'm a Counter";
    font-weight: bold;
    font-size: 1em;
    color: inherit;
    text-align: center;
    letter-spacing: 0.05em;
    height: 3em;

  } */
`;

export default CenterCounterWrapper;
