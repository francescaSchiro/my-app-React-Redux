import styled from "styled-components";

const CardWrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* flex-basis: 100%; */
  flex-wrap: wrap;

  width: 50vh;
  height: 50vh;
  padding: 1em;


    /* border-top:  3em solid purple; */
  /* border: 1em solid whitesmoke; */
  border-radius: 1em;
  background-color: whitesmoke;
  font-size: inherit;
  
  /* @media screen and (max-width: 750px) {
    width: 40vh;
    height: 40vh;
  } */
`;

export default CardWrapper;
