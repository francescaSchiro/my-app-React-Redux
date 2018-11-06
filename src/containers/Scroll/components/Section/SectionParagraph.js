import styled from "styled-components";

const SectionParagraph = styled.div`
  box-sizing: border-box;
  border: 2px solid red;
  width: 50%;

  font-size: 1em;
  font-weight: lighter;
  padding: 1%;

  margin-top: 40px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export default SectionParagraph;
