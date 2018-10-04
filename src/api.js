import 'whatwg-fetch';

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

export function getTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('no data pulled')
      resolve([
        {
          "id": 0,
          "text": "Learn about actions",
          "completed": false
        },
        {
          "id": 1,
          "text": "Learn about reducers",
          "completed": false
        },
        {
          "id": 2,
          "text": "Learn about state",
          "completed": false
        }
      ]
      )
    }, 1000);
  })
}
