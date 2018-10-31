import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;

  position: relative;
  height: 500px; /* fallback for older browsers */
  height: 100vh;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  display:flex;

  border: ${props => props.border};

  z-index: ${props => props.zIndex};
  /* transform:  ${props => props.isDebugActive ? "scale(-3)" : "1"} */
  width: ${props => props.isDebugActive ? "200px" : "100vw"};

  ${props => props.isDebugActive ? `
    -webkit-transform: translate3d(800px, 0, -300px) rotateY(40deg);
    transform: translate3d(700, 0, -300px) rotateY(40deg);
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;` :
    `-webkit-transform: translate3d(0) rotateY(0deg);
    transform: translate3d(0) rotateY(0deg);
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;`  };

`;

export default Wrapper;
