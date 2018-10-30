import styled from "styled-components";

const Wrapper = styled.div`
box-sizing:border-box;
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
  /* border: 2px solid red; */

  /* transform: translate3d(700px, 0, -800px) rotateY(30deg); */

  z-index: ${props=> props.zIndex};
`;

export default Wrapper;
