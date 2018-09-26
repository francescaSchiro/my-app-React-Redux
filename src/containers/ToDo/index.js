import React from 'react';

import ToDoWrapper from './ToDoWrapper';


import TodoApp from './components/TodoApp'




export default class ToDo extends React.Component{
  render() {
    return(
      
      <ToDoWrapper key = "ToDoWrapper">
        <TodoApp />
      </ToDoWrapper>
      
    );
  };
}

// as in the tutorial, cause it's attatched to the root. but this is like a 'sub-app'
// render(
//   <Provider store={store}>
//     <TodoApp />
//   </Provider>,
//   document.getElementById('root')
// )



//----------------OLD PLACEHOLDER---------------------
// export default class ToDo extends React.Component{
//   render() {
//     return(
//       <ToDoWrapper key = "ToDoWrapper">
//         <H1> ToDo </H1>
//         <div>
//           <P>*put my todo list here*</P>
//         </div>  
//       </ToDoWrapper>
//     );
//   };
// }
