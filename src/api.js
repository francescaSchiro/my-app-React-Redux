import axios from "axios";

/**
 * GET getTodos call in the saga. fetches as many todos as the todosNum in the URL
 * and returns them in the response 'jsonized'
 * @param {number} todosNum
 */
export function getTodos(todosNum) {
  if (todosNum === -1) {
    return axios
      .get(`http://localhost:3000/todos`)
      .then(res => res.data)
      .catch(err => console.error(`Error: ${err} `));
  } else {
    return axios
      .get(`http://localhost:3000/todos?_limit=${todosNum}`)
      .then(res => res.data)
      .catch(err => console.error(`Error: ${err} `));
  }
}

/**
 * POST a new todo at the fetch URL given, with the options arguments defines.
 * @param {object} todo
 */

export function newTodoDB(todo) {
  return axios
    .post("http://localhost:3000/todos", todo)
    .then(res => res.data)
    .catch(err => console.error(`Error: ${err}`));
}

/**
 * DELETE todo from todos list(array of obj) in the DB (json:server)
 * @param {object} todo
 */

export function removeTodoDB(todo) {
  return axios
    .delete(`http://localhost:3000/todos/${todo.id}`, todo) // also works { params: todo }
    .then(res => res.data)
    .catch(err => console.error(`Error: ${err}`));
}

/**
 * TOGGLE todo.completed property from todo in the DB (json:server)
 * @param {object} todo
 */

export function toggleTodoDB(todo) {
  return axios
    .put(`http://localhost:3000/todos/${todo.id}`, { ...todo, completed: !todo.completed } )
    .then(res => res.data)
    .catch(err => console.error(`Error: ${err}`));
}

// export function toggleTodoDB(todo) {
//   todo.completed = !todo.completed;
//   let options = {
//     method: "PUT",
//     body: JSON.stringify(todo),
//     headers: new Headers({
//       "Content-Type": "application/json"
//     })
//   };
//   return fetch(`http://localhost:3000/todos/${todo.id}`, options)
//     .then(res => res.json())
//     .catch(err => console.error(`Error: ${err} `));
// }
