import styled from "styled-components";

import { commonLayerStyle } from "../../../../utils";



const Wrapper = styled.div`
  ${commonLayerStyle(255,215,0, 0.4)}
  top:${props => props.top ? props.top : "0" };
  border: 2px solid yellow;
  margin: ${props=> props.margin};
  position: ${props => props.position ? props.position : "absolute" };

  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  height: ${props=>props.height};
  width:  ${props => props.width};
  z-index: 4;
`;

export default Wrapper;
