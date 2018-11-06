import styled from "styled-components";

const SectionTitle = styled.div`
  box-sizing: border-box;
  height:fit-content;
  border: 2px solid red;
  width:50%;

  
  font-size: 2em;
  font-weight: bold;
  text-align: left;
  position:absolute;
  padding:1%;

  top:0;
  



  &::after {
    content: "";
    position:absolute;
    border-bottom: 2px solid #1E1E1E;
    bottom: 0;
    left: 0;
    width: 95%;
  }

    @media screen and (max-width:768px){
    width: 90%
  }
`;

export default SectionTitle;
