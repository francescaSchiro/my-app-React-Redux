import styled from "styled-components";

const ItemsList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 466px) {
    flex-direction: column;
    margin: 0;
    /* display: none; */
  }
`;

export default ItemsList;
