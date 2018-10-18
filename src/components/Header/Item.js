import styled from 'styled-components';

const Item = styled.li`
  
  display: inline-block;
  padding: 5px 5px;

 @media screen and (max-width: 466px) {
     padding-bottom:20px;
    /* display: none; */
  }
`;

export default Item;
