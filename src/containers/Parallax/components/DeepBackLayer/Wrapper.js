import styled from "styled-components";

import { commonLayerStyle } from "../../../../utils";

const Wrapper = styled.div`

${commonLayerStyle(255, 0, 0, 0.4)}

transform: translateZ(-2px) scale(3);

z-index: ${props=> props.zIndex};


`;

export default Wrapper;
