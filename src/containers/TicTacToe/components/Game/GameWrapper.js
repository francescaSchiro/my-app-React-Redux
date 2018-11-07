import styled from "styled-components";

const GameWrapper = styled.div`
  margin: 20px 0 20px 0;
  display: grid;
  width: 50vh;
  height: 50vh;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "box1 box2 box3"
    "box4 box5 box6"
    "box7 box8 box9";
  grid-gap: 2px;
  justify-items: center;
  align-items: center;

  font-size: inherit;
  background-color: whitesmoke;

  @media screen and (max-width: 750px) {
    width: 40vh;
    height: 40vh;
    margin-top: 13px;
  }
`;

export default GameWrapper;
