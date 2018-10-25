import styled from "styled-components";

const GameWrapper = styled.div`
  box-sizing: border-box;
  margin: 20px 0 20px 0;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "box1 box2 box3"
    "box4 box5 box6"
    "box7 box8 box9";
  grid-gap: 2px;

  /* shortcut 
  place-content: center center;  */
  justify-items: center;
  align-items: center;

  width: 50vh;
  height: 50vh;

  background-color: whitesmoke;
  font-size: inherit;
  
  @media screen and (max-width: 750px) {
    width: 40vh;
    height: 40vh;
    margin-top: 13px;
  }
`;

export default GameWrapper;
