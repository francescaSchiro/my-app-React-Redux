import styled from "styled-components";

const SectionWrapper = styled.div`
  box-sizing: border-box;
  position:relative;
  width: 100%;
  height: 350px;
  border: 2px solid blue;
  display: flex;
  flex-direction:  column;
  align-items: ${props => props.align};
  text-align: ${props => props.text};

  font-family: 'Share Tech Mono', monospace;

   @media screen and (max-width:768px){
    height: 410px;

  }

`;

export default SectionWrapper;
