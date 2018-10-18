import styled from "styled-components";
import { NavLink } from "react-router-dom";


const LinkItem = styled(NavLink)`
  font-weight: bold;
  letter-spacing: 0.5px;
  color: inherit;

  :hover {
    text-shadow: 0 0 3px white;

  }
`;

export default LinkItem;