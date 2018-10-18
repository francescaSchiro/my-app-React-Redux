import styled from "styled-components";

const ItemsList = styled.ul`
  list-style: none;
  margin: 8px 2px;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;


   @media screen and (max-width: 466px) {
     flex-direction:column;
    /* display: none; */
  }
`;

export default ItemsList;
