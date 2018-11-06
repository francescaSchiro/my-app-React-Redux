import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;

  position: relative;
  height: 500px; /* fallback for older browsers */
  height: ${props => props.height};
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  display:flex;
  

  border: ${props => props.border};

  z-index: ${props => props.zIndex};
  /* transform:  ${props => props.isDebugActive ? "scale(-3)" : "1"}; */
  width: ${props => props.isDebugActive ? "300px" : "100%"};

  ${props => props.isDebugActive ? `
    -webkit-transform: translate3d(250px, 0, -600px) rotateY(50deg);
    transform: translate3d(250px, 0, -600px) rotateY(50sdeg);
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;` :
    `-webkit-transform: translate3d(0) rotateY(0deg);
    transform: translate3d(0) rotateY(0deg);
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;`  };

`;

export default Wrapper;
