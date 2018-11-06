import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;

  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  font-size: 1.4em;
  letter-spacing: 0.1em;
  font-weight: bold;
  color: #1e1e1e;

  background-color: gainsboro;
`;

export default Wrapper;
