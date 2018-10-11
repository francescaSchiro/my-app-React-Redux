/**
 * GET getTodos call in the saga. fetches as many todos as the todosNum in the URL
 * and returns them in the response 'jsonized'
 * @param {number} todosNum
 */
export function getTodos(todosNum) {
  if (todosNum === -1) {
    return fetch(`http://localhost:3000/todos`).then(res => res.json());
  } else {
    return fetch(`http://localhost:3000/todos?_limit=${todosNum}`).then(res =>
      res.json()
    );
  }
}

/**
 * POST a new todo at the fetch URL given, with the options arguments defines.
 * @param {object} todo
 */

export function newTodoDB(todo) {
  let options = {
    method: "POST",
    body: JSON.stringify(todo),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };
  return (
    fetch("http://localhost:3000/todos", options)
      .then(res => res.json())
      // .then(res => console.log(res))
      .catch(err => console.error(`Error: ${err} `))
  );
}

/**
 * DELETE todo from todos list(array of obj) in the DB (json:server)
 * @param {object} todo
 */
export function removeTodoDB(todo) {
  let options = {
    method: "DELETE"
  };
  return (
    fetch(`http://localhost:3000/todos/${todo.id}`, options)
      .then(res => res.json())
      // .then(res => console.log(res))
      .catch(err => console.error(`Error: ${err} `))
  );
}

/**
 * TOGGLE todo.completed property from todo in the DB (json:server)
 * @param {object} todo
 */
export function toggleTodoDB(todo) {
  todo.completed = !todo.completed;
  let options = {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };
  return fetch(`http://localhost:3000/todos/${todo.id}`, options)
    .then(res => res.json())
    .catch(err => console.error(`Error: ${err} `));
}
