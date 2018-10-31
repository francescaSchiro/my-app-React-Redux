import styled from "styled-components";

import { commonLayerStyle } from "../../../../utils";

const Wrapper = styled.div`
  ${commonLayerStyle(
    255,
    165,
    0,
    0.4
  )} /* scale factor = 1 + (translateZ * -1) / perspective */
  -webkit-transform: translateZ(-300px) scale(2);
  transform: translateZ(-300px) scale(2);

  border: 2px solid orange;
  height: ${props=>props.height};
  width:  ${props => props.isDebugActive ? "200px" : "100vw"};

  z-index: 3;
`;

export default Wrapper;
