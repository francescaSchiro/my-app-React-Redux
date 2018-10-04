import styled from 'styled-components';

const Button = styled.button`
  text-decoration: none;
  border: none;
  width: 50px;
  height: 50px;
  font-family: inherit;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.05em;
  border-radius: .1em;
  color:blueviolet;
  text-align: center;
  outline: 0;
  margin: 2px;
  cursor:pointer;
  :hover:not(:disabled) {
    box-shadow: 0px 0px 4px 1px whitesmoke;
  }
  :active {
    box-shadow: 0px 0px 4px 1px #ed704d;
    color: #ed704d;
  }
  :disabled {
    opacity: .6;
  }
`;

export default Button;