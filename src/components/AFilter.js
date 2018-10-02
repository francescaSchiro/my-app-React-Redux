import styled from 'styled-components';

// creare funzione che lasci il color viola
// dopo che è stato selezionato (quando è montato il componente)

const AFilter = styled.a`
  display:inline-block;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  letter-spacing: .05em;
  padding: 10px 5px;
  

  /* &:hover {
    color: blueviolet;
    font-weight: bold;  
  }  
  &:active {
    color: green;
    font-weight: bold;
    letter-spacing: .05em;
  }   */
`;

export default AFilter;


// export default class Link extends React.Component {
//   render() {
//     return (
//       <A href="/"></A>

//     );
//   };
// }