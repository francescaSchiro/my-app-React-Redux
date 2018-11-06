import styled from "styled-components";

const Title = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: fit-content;
  border: 2px solid red;

  margin: 10% 5% 0 0;
  padding-bottom: 10px;
  font-size: 5em;
  font-weight: bold;
  text-align: right;
  position: relative;

  opacity: 0;
  animation: animationH2 linear 1000ms;
  animation-iteration-count: 1;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  @keyframes animationH2 {
    0% {
      -webkit-transform: translate(0px, 100px) scale(0);
      -ms-transform: translate(0px, 100px) scale(0);
      transform: translate(0px, 100px);
      opacity: 0;

      /* background-color: blue; */
    }

    100% {
      -webkit-transform: translate(0px, 0px) scale(20);
      -ms-transform: translate(0px, 0px) scale(20);
      transform: translate(0px, 0px);
      opacity: 1;
      /* background-color: red; */
    }
  }

  /* &::after {
    content: "";
    position:absolute;
    border-bottom: 4px solid #1E1E1E;
    bottom:0;
    right: 0;
    width: 95%;
  } */

  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
`;

export default Title;
