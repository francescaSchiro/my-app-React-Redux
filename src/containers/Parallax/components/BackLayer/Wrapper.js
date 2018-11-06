import styled from "styled-components";

import { commonLayerStyle } from "../../../../utils";

const Wrapper = styled.div`
  ${commonLayerStyle(
    255,
    165,
    0,
    0.4
  )} /* scale factor = 1 + (translateZ * -1) / perspective */
  top:${props => (props.top ? props.top : "0")};
 

  -webkit-transform: translateZ(-300px) translateX(50%) scale(2);
  transform: translateZ(-300px) translateX(50%) scale(2);

  border: 2px solid orange;
  height: ${props => props.height};
  width:  ${props => (props.isDebugActive ? "200px" : "100%")};

  z-index: 3;
`;

export default Wrapper;
