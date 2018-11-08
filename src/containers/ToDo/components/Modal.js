import styled from "styled-components";
import { breakPoint } from "../../../utils";

const Modal = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  font-style: normal;

  box-shadow: 7px 7px 20px 4px;
  border-radius: 10px;

  color: #ed704d;
  align-items: center;

  background-color: whitesmoke;

  animation: scaleModal 0.2s ease-in;
  -webkit-animation: scaleModal 0.2s ease-in;

  @keyframes scaleModal {
    0% {
      transform: scale(0);
      -webkit-transform: scale(0);
      transform: opacity(0);
      -webkit-transform: opacity(0);
    }

    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
      transform: opacity(0);
      -webkit-transform: opacity(1);
    }
  }

  @media screen and (max-width: ${breakPoint}px) {
    width: 350px;
  }
`;

export default Modal;
