import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 3em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  color: whitesmoke;
  font-size: 14px;
  letter-spacing: 0.05em;

  background-color: ${props =>
    props.isTimeTravelActive ? "#764e80" : "blueviolet"};
`;

export default Wrapper;
