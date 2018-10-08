import "whatwg-fetch";

// export function getTodos() {
//   const api = "getTodos";
//   const method = "GET";
//   const url = "/" + api + ".json";

//   return fetch(url, {
//     // uguale a scrivere method: method
//     method,
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     }
//   }).then(res => res.json()); // parametri: indirizzo chiamata, e {oggetto con la configurazione della richiesta}
// }

let todos = [
  {
    id: 0,
    text: "Learn about actions",
    completed: false
  },
  {
    id: 1,
    text: "Learn about reducers",
    completed: false
  },
  {
    id: 2,
    text: "Learn about state",
    completed: false
  },
  {
    id: 3,
    text: "Study",
    completed: false
  },
  {
    id: 4,
    text: "Write",
    completed: false
  },
  {
    id: 5,
    text: "Read",
    completed: false
  }
];

export function getTodos(todosNum) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = todosNum !== -1 ? 
        todos.splice(0, todosNum) :
        todos;
        
      resolve(response);
    }, 1000);
  });
}
