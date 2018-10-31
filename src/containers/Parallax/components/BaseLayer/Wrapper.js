import styled from "styled-components";

import { commonLayerStyle } from "../../../../utils";



const Wrapper = styled.div`
  ${commonLayerStyle(255,215,0, 0.4)}

  border: 2px solid yellow;
  
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  height: ${props=>props.height};
  width:  ${props => props.isDebugActive ? "200px" : "100vw"};
  z-index: 4;
`;

export default Wrapper;
