import styled from "styled-components";
import { breakPoint } from "../../utils";


const ItemsList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media screen and (max-width: ${breakPoint}px) {
    flex-direction: column;
    margin: 0;
  }
`;

export default ItemsList;
