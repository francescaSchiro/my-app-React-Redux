import styled from "styled-components";

import { commonLayerStyle } from "../../../../utils";

const Wrapper = styled.div`
  ${commonLayerStyle(0, 255, 0, 0.4)}
  
  /* scale factor = 1 + (translateZ * -1) / perspective */
  transform: translateZ(-1px) scale(2); 

    z-index: ${props=> props.zIndex};

`;

export default Wrapper;
