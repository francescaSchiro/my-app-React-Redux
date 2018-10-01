import styled from 'styled-components';

const ButtonReset = styled.button`
  background-color: #ed704d;
  font-family: inherit;
  font-weight: bold;
  border-radius: 1em;
  border: none;
  color: whitesmoke;
  padding: 1em;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
  letter-spacing: .1em;
  text-decoration: none;
  display: inline-block;
  /* width: fit-content; */

  cursor: pointer;

  :hover:not(:disabled) {
    box-shadow: 0px 0px 4px 1px whitesmoke;
  }
  :active {
    box-shadow: 0px 0px 7px 4px #ed704d;
    color: #ed704d;
    background-color: whitesmoke;
  }
`;

export default ButtonReset;