import styled from "styled-components";

const ModalWrapper = styled.div`
  box-sizing: border-box;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 2;
`;

export default ModalWrapper;
