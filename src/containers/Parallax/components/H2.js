import styled from "styled-components";

const H2 = styled.h2`
  box-sizing: border-box;
  display: block;
  /* font-size: ${props => (props.counterValue ? "3em" : "1.5em")}; */
  color: black;
  font-weight: bold;
  letter-spacing: 0.1em; 
  /* padding:0; */
  /* padding-bottom: ${props => (props.timerCount ? ".4em" : "0")}; */
  /* margin: 0; */
  text-align: center;
  

    /* transform: translate(0px, 100px); */
    opacity: 0;
    animation: animationH2 linear 1000ms;
    animation-iteration-count: 1;
    animation-delay: .5s;
    /* preserves the property changes once reached the last keyframe */
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
`;

export default H2;
