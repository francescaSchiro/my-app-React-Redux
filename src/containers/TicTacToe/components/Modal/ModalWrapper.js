import styled from "styled-components";

const _getBgImage = (props) => {
  switch (true) {
    case props.winner:
      return "url('https://media1.tenor.com/images/2f02ec9a2787ea228d32ec0948c36017/tenor.gif')";
    case props.draw:
      return "url('http://www.reactiongifs.com/r/2013/02/tied.gif')";
    default:
      return "none";
  }
};


const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3em;
  justify-content: start;
  align-items: center;
  flex: 1;
  width: 100%;


  font-size: 14px;
  letter-spacing: 0.05em;
  color: whitesmoke;
  background-color: #353b46;
  background-image: ${props => _getBgImage(props)};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default ModalWrapper;
