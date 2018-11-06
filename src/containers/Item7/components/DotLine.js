import styled from "styled-components";

const DotLine = styled.div`
  box-sizing: border-box;

  width: 5px;
  height: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #1e1e1e;

  transition: width 1s ease;
  animation: animationDotLine linear 2s;
  animation-fill-mode: forwards;

  @keyframes animationDotLine {
    0% {
      width: 10px;
    }

    100% {
      width: 90%;
    }
  }
`;

export default DotLine;
