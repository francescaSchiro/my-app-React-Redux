import styled from 'styled-components';

// creare funzione che lasci il color viola
// dopo che è stato selezionato (quando è montato il componente)

const A = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  letter-spacing: .05em;
  padding: 10px 5px;
  :hover {
    color: blueviolet;
    font-weight: bold;  
  }  
  :active {
    color: #4e8bed;
    font-weight: bold;  
  }  
`;

export default A;


// export default class Link extends React.Component {
//   render() {
//     return (
//       <A href="/"></A>

//     );
//   };
// }