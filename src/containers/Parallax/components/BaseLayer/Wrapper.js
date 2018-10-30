import styled from "styled-components";

import { commonLayerStyle } from "../../../../utils";

const Wrapper = styled.div`
  ${commonLayerStyle(0, 0, 255, .4)}
  
  transform: translateZ(0);

  z-index: ${props=> props.zIndex};
`;

export default Wrapper;
