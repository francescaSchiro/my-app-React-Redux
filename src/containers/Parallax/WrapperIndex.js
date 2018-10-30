import styled from "styled-components";

const WrapperIndex = styled.div`
box-sizing:border-box;
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective-origin: 100%;
  -ms-perspective-origin-x: 100%;
  color: whitesmoke;
  
  ::-webkit-scrollbar { 
    display: none; 
}

::-webkit-scrollbar-thumb {
    background: #FF0000;
}
  /* background-color: gainsboro; */
`;

export default WrapperIndex;