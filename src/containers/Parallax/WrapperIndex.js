import styled from "styled-components";

const WrapperIndex = styled.div`
  box-sizing: border-box;

 
  height: 500px; /* fallback for older browsers */
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-perspective: 800px;
  perspective: 800px;


/* ${props => props.isDebugActive ? `
    -webkit-transform: translateX(-200px) ;
    transform: translateX(-200px) ;
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;` :
    `-webkit-transform: translate3d(0) rotateY(0deg);
    transform: translate3d(0) rotateY(0deg);
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;`  }; */

  perspective-origin: 100%;
  -ms-perspective-origin-x: 100%;

  color: whitesmoke;
  font-weight: bold;
  letter-spacing: 0.1em;

  ::-webkit-scrollbar {
    display: none;
  }

  background-color: whitesmoke;
  /* background-image: url("https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2efbd126389f0ea2ce0db8c507919e1b&auto=format&fit=crop&w=1500&q=80"); */
`;

export default WrapperIndex;
