import styled from "styled-components";

const TitleWrapper = styled.div`
  box-sizing: border-box;
  position: relative;

  width: 100%;
  height: 600px;
  margin-top: 0;
  border: 4px solid green;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;

  font-size: 1.4em;
  letter-spacing: 0.1em;
  font-weight: bold;
  color: #1e1e1e;

  background-color: gainsboro;

  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;

export default TitleWrapper;
