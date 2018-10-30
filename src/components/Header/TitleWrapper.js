import styled from 'styled-components';
import { breakPoint } from "../../utils";



const TitleWrapper = styled.title`
  box-sizing: border-box;

  background-color: #4e8bed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em;
  width: 100%;
  /* padding: 10px 0px; */
  color:whitesmoke;
  font-weight: bold;
  text-align: center;

   @media screen and (max-width: ${breakPoint()}px) {
    justify-content: space-between;
    padding: 0 9%;
  }
  
`;

export default TitleWrapper;
