import styled from "styled-components";

const SectionWrapper = styled.div`
  box-sizing: border-box;
  
  width:100%;
  /* height: 500px; */

  border: 2px solid blue;
  display:flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
  flex-wrap: wrap;

  font-family: 'Share Tech Mono', monospace;

  text-align: ${props => props.textAlign};
`;

export default SectionWrapper;
