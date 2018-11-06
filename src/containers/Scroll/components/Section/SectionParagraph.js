import styled from "styled-components";

const SectionParagraph = styled.div`
  box-sizing: border-box;
  border: 2px solid red;
  width:50%;

  position:absolute;
  font-size: 1em;
  font-weight: lighter;
  text-align: left;

  top: 0;
  margin-top:70px;

  @media screen and (max-width:768px){
    width: 90%
  }
  
`;

export default SectionParagraph;
