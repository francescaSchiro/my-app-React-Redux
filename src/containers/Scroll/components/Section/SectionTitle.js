import styled from "styled-components";

const SectionTitle = styled.div`
  box-sizing: border-box;

  height: fit-content;
  border: 2px solid red;
  width: 50%;

  font-size: 2em;
  font-weight: bold;
  padding: 1%;

  position: relative;
  
  
  &::after {
    content: "";
    position: absolute;
    border-bottom: 2px solid #1e1e1e;
    bottom: 0;
    left: 0;
    width: 50%;
    @media screen and (max-width: 768px) {
    width: 90%;
 
  }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
 
  }
`;

export default SectionTitle;
