import styled from "styled-components";

import { commonLayerStyle } from "../../../../utils";

const Wrapper = styled.div`
  ${commonLayerStyle(255, 69, 0, 0.4)} 
  
  -webkit-transform: translateZ(-600px) scale(3);
    transform: translateZ(-600px) scale(3);

  border: 2px solid red;
  width:  ${props => props.isDebugActive ? "200px" : "100vw"};
  height: ${props=>props.height};
  z-index: 2;
`;

export default Wrapper;
