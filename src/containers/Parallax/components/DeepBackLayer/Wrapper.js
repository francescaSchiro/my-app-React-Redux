import styled from "styled-components";

import { commonLayerStyle } from "../../../../utils";

const Wrapper = styled.div`
  ${commonLayerStyle(255, 69, 0, 0.4)} 
  top:${props => props.top ? props.top : "0" };

  -webkit-transform: translateZ(-600px) translateX(50%) scale(3);
    transform: translateZ(-600px) translateX(50%) scale(3);
    position:fixed;

  border: 2px solid red;
  width:  ${props => props.isDebugActive ? "200px" : "100%"};
  height: ${props=>props.height};
  z-index: 2;
`;

export default Wrapper;
