This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To **start** the project run:
- in the JSONSERVER folder, in order to start the database: 
`npm run json:server` 
- in the project folder, in order to start the app (you need to change port): 
`npm start`

***
 # A PRACTICE PROJECT TO USE REDUX (and STYLED-COMPONENTS)
--> in order to understand better React-Boilerplate and it's libraries
*react-redux, react-router-dom, fontawesome, redux-saga* <--

Starting from the clean **Create-React-App** downloaded the process in implementing the Redux store to manage the state followed these steps:

- Create the skeleton with [styled components](https://www.styled-components.com/docs). Trying to figure out the scaffolding of the whole app.
(constant process through the steps... Which ones should be *Components or Containers?*) 

- Implemented the **Loadable** library to render components;

- Create the 1st **COUNTER** exercise to increment or decrement by one the counterValue. When 10 or -10 is reached, a message pops up that you reached the limit;

- Create the **routing** between exercises;

- Create the **2nd static exercise** that will display the current counterValue displayed in the other exercise. With a RESET value to initial state( counterValue = 0)

- Create the 3rd exercise, a **To Do list**, with an internal **Redux store, reducers and actions** to manage the change of state. (display list according to the filters(all, active and completed), possibility to toggle to cross out(completed) or not(becomes active) each item of the list). 
----> this project was made following the [Redux official documentation](https://redux.js.org/basics).

- Following the Tutorial on the **Redux documentation**, the toggle action appeared **bugged**, so I fixed it giving that action a parameter that wasn't the index of the item in the array, but instead a unique id made it the same as the text prop.

- Next I tried to implement another action to practice with the Redux flow. So I created the possibility to **REMOVE Items** from the list by glicking on the trash icon(imported from [fontawesome](https://fontawesome.com/)

- Move the **Redux store** from just local to the 3rd section of the TodoApp, **to the root**, wrapping the whole App in the  `<Provider store ={store}>` component. Made the **globalReducer** from which any **HOC**(High Order Component) in the app could get access.

- Changed the 1st **Counter** app, working with the usual React state, into a **HOC**(with its actions and reducers) so it could store its state, and access it, globally.

- **Refactoring** of the TodoApp. (lots of changes: Eg. the actions that involves the todos array now they all take the same parameter: the object `{todo}`.)

- The **Routing** made the whole page refresh everytime I changed section of the app. So now I made every component rerender according to the `<Link>` selected **without refreshing** the whole page.

- Fixed the default style of the **Link** with styled-components. Changed it into `<NavLink>` imported from 'react-router-dom' so I could use the prop {activeStyle}; Styled the counter buttons.

- Made the **SavedCounter** (section at the ITEM 2): connected it to the **redux store** so it could access the current counterValue to print. Added an action **RESET** to the Counter ones, managed it in the reducer and imported it to use it in the SavedCounter along with the counterValue prop. (did so with the mapStateToProps and mapDispatchToProps and connect methods inside the CounterSaved component )
 
- Lots of style fixing(bottons, links, ecc) !!!
 > Couldn't fix the Chrome default blue border on buttons click. !!!

- Fixed some bugs: TitleWrapper was expanding in height when in HomePage: `flex:1` (!!!NO height: 100vh!!!) on ItemsWrappers' fixed the problem. Fixed also the FilterLinks style that was twitching when one active. 

- Implemented the **NotFoundPage** Component when any path matches;
 
- **WHAT I SHOULD HAVE DONE**: Created models > data.json( > array di oggetti todo Example `{id: 0, text: 'Learn about actions', completed: false}` to fetch Todo entries with a `REQUEST_TODOS` at `componentWillMount` lifecycle. The request gets intercepted by SAGA middleware to managethe asynchronicity; 

**WHAT I ACTUALLY DID**: Implemented **Saga** to manage the fake fetch of thegetTodos.json file at the **componentWillMount** lifecycle. `new Promise` with the `resolve` json hardcoded (cause it couldnt find the path of the json file in the folder src)

- Created a **Saga for the Counter component** to intercept the action increment delay of a new button that adds 2 after 2 seconds (passed as parameters `onClick={this.props._incrementDelay.bind(this, 2000, 2)}` when action dispatched (`_incrementDelay: (delayTime, sumNum) => { dispatch(incrementDelay(delayTime, sumNum));},`).
Imported and added the new Saga watcher to the store(`sagaMiddleware.run(watchIncrementDelay);`)

- In Counter/index.js added few other buttons that are rendered through the mapping of an array that passes the sumNum to the increment function.
`{[1, 2, 3].map((n, i) => (<Button onClick={this.props._increment.bind(this, n)}>+{n}</Button>))}`

 > COULD NOT DO** - tryed to make the absolute path work in react(>> see `.env` file in root folder)

- **Filtered the response from the Back End** (with a fake fetch to the todos list in the `api.js` file) that allows only a certain number of todos(todosNum)    
    - through a param, todosNum described in the `<Routes>` URL;
    - defined it(hardcoded) in the `<NavBar><Link to={"/item3/3"}>`;
    - in the `<Todo>` `componentWillMount()` lifecycle the `todosFetchRequest` action (defined in the `action.js` file with the `{todosNum:itemsNum}` as payload) is passed as props and dispatched with the param;
    - the action is intercepted by the `saga.js` that calls the `getTodos` with the param `todosNum`(fake fetch in the `api.js` file) to ask for the filtered todos list.
    - the Back End gives back the `response` to the saga;
    - The saga worker goes on with the procedures and dispatches action for the successful fetch that has to do something with the response. `yield put(fetchSuccess(response))`;
    - The `Reducer` intercepts it and set the todos in the State
    - The state is changes, the connected `<Todo>` component realize it and rerenders with the new changed data.

    To sum it up, these are all the steps: **Routes>ITEM3>Todo>Saga>BackEnd>Saga>Reducer>State>Todo**

 > *There's only 1 problem: everytime it ovverrides my state.*

- Implemented a real `fetch` to a [json-server](https://github.com/typicode/json-server) in order to **GET** the todos.
    - **POST** fetch (in the `api.js` file) at the triggering of the AddTodo action. It adds a todo to le list and on the `json:server`; To make the id unique I generated with the `guid()` function defined in the `utils.js` file
    - **DELETE** fetch that removes a todo from the list (picked the right URL to fetch one through the [querystring] (https://dzone.com/articles/understanding-the-uri-param-and-query-param-with-r)) ;

- Situazione stabile: 
    - Push su develop.
    -Spostata su master(`git checkout master`)
    - merge di develop su master (`git merge devlop`)
    - Push su master di develop (`git push`)
    - torno su develop(`git checkout develop`).

- **PUT** in `api.js` updates the completed value of the toggled todo not only in the `VisibleList`, but also in the `db.json`;

- **!!! No actions dispatched in the Reducers !!!** !!!(it's an *antipattern*). `ADD_TODO`, `REMOVE_TODO` and `TOGGLE_TODO` now in the SAGA:
    - STEP 1: dispatch the `call` action that updates the database with a fetch method(`POST`, `PUT` or `DELETE`);
    - STEP 2: dispatch the action `_SUCCESS` of the fetch's response that is intercepted by the reducer which updates the state.

- Refactoring of the `TodoList` e `Visible List`: now the TodoList is connected and communicates with the Redux state, the props are passed from the TodoList to the `Todo`.

- Fixed how I managed the `todosNum` value: in `index.js componentWillMount()` method it is said that if there's no value, it's automatically set to  -1. So in the `getTodos()` fetch function in the `api.js` file I told to show all the todos in case there's no value in the URL.

- Create an `input` field on the TodoList where the user can enter a number value that updates the endpoint of the URL at the `submit` click in order to show a specific number limit of todos.
> DOESN'T completely work: it does **update the list of visible** items according to the input value, but it **doesn't update the Route** of the URL with the todosNum endpoint value.
- **NEXT** Update the Route of the URL through the `<Form oSubmit=...>` che dispatcha l'azione  `dispatch(todosFetchRequest(input.value))`. 
    - update call(getTodos(todosNum)) to update the list of visible todos;
    If the response is OK then:
    - update the URL with the `history.push(``/${todosNum}``)`.
*Need to look into the `componentWillUpdate()` lifecycle and the [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html) react documentation*se21

- **!!!!!!!** Look at the **[connected-react-router](https://github.com/supasate/connected-react-router) library.** **!!!!!!!**
Helps you manage `history`. With the help of this library I:
    - Created `history` object in my `store.js` file;
    - Wrapped the globalReducer with `connectRouter` and supplied the `history` obj to get a new root reducer;
    - Used `routerMiddleware(history)` (*in the compose(applyMiddleware(...))* , so I can dispatch history actions(Eg. to change URL with `push('/path')` like I did after in the SAGA (`import { push } from "connected-react-router"`));
    - Next, **as a child of the react-redux `<Provider>`**, in my `index.js`, I wrapped the `<App>`(with its `<Routes>`) in the `<Connected Router history={history}>`from `connected-react-router`, after I imported the `history` from the `store.js` (import { store, history } from "./store")
- !!!**Fixed the input BUG**!!!! The `AddTodo` button didnt work anymore because the second input ovverrode the previous one so it returned an empty string. So I initialized them both with different names at the beginning and changed each `input.value` parameter with the corresponding input reference name;

- Fetched data with [axios](https://github.com/axios/axios) instead of the native fetch API. `npm install axios` 

- The URL(with the *todosNum param*) is not synchronized with the Remove and AddTodo button. So if I add or delete any element within the todos array, the number of item displayed doesn't match the selected parameter.
**Fixed the AddTodo button**: now, when you add a todo over the requested visible limit, it adds it to the DB(in the `saga` > `api`), but not to the state in the `addTodoSuccess` in the reducer.( Besides the *todo*, I passed also the *todosNum* as payload in the `addTodo` action. Passing it from its Todo Parent.(`index.js`));
**Needs to be fixed: the Remove button**

> **TO FIX**: If I add without any `todosNum` it doesnt show the todo!!!!!!!!
go back to previous committ!

- Made a **modal**: when you click on the trash can it opens and asks you: are you sure you want to delete the todo? *No, jk. || Yes, delete*.
    - I created a new reducer to manage the `modal.show: true || false state`, triggered by the action `showModal` or `hideModal`.
    - I passed down the connected state (with the `onClick` actions and the `show` state) from the `index.js` `<ToDo> Pure component` to it's children, till the `Todo.js` file.
    - In this file I imported the `<Modal>` styled Component that received the props and it rendered accordingly to the show status being either *true* or *false*.
    - There are 3 actions triggered with clicks:
        - 1) on the trash-icon: **onShowModalClick** (that dispatches `showModal()` to set `{show: true}`);
        - 2) on the "NO, jk": **onHideModalClick**(that dispatches `hideModal()` to set `{show: false}`);
        - 3) on the "Yes, delete": **onRemoveClick** (that dispatches `removeTodo()` intercepted by Saga: it removes the todo from the DB, from the todos state and then dispatches the `hideModal()` action to reset the show state to false.)
- **REFACTORING**: the actions `onClick` to show and Hide the modal I used to pass them as props from the parent: now I only pass the `{ dispatch }` mnpmethod and import the `showModal()` and `hideModal()` from the `actions.js` file

> **TO FIX**: the modals, once the state show is set to true, are opened for ALL the TODOS!  cause they only have one common reference. => I need to be more specific to every single todo >    > **I COULD** onTrashClick i pass the todo.index as parameter to use it to update the `{todos[i].show: true}` cause now the overlays are on top of eachother and is always deleted the last one in the list.
- **FIXED!!!** in the `< AddTodo >` I defined another parameter ```{ show: false }``` to pass to a new added todo. I moved the `showModal()` and `hideModal()` actions inside the todos reducer and passed the `{ index }` as action payload. In the `<TodoList>` component I pass the `index={index}` to each rendered `<Todo>` component so that I could use it in the `Todo.js` file when at the onClick I dispatch ```onClick={() => dispatch(showModal(index))} onClick={() => dispatch(hideModal(index))}```. Then, in the reducer todo I tell how to update the state: with showModal(index): `state[index].show = true`, and with hideModal(index): `state[index].show = false`. This parameter is read in the Todo.js: when *true* it renders the `<Modal>`.

- Optimized the `<ButtonYesNo>` styled-component: when it reads the props `No` of a ButtonYesNo (rendered in the `<Todo>` component), it changes the background color! 

- Refactoring with styled-components.
Added the [polish](https://github.com/styled-components/polished) library(that works with styled-components) to edit the look of the inputs `placeholder` to edit the placeholder@media query added to show hamburger menu.
> Still couldn't split the NavLink in an external styled component. looses functionalities.!!!!

- **Hamburger Menu button** is working: it opens and closes the NavBar vertically.

- **Styling & Refactoring**
    - Automatically Closing hamburger menu when Item is selected;
    - Added some styling to the buttons in `Counter` and `NavBar`
    - refactored again the `Modal` flow of passed props! not best practice to pass the dispatch method: **ONLY CONTAINERS can dispatch actions and interact with the store!**

- **Styling & Refactoring**:
    - started to get rid of elements that are the same (like `<Button>`) just keeping one to style with different incoming props from different components.
    - Had some fun at practicing with *animation* and *transitions* (*logo* and *goBack to counter* in Reset section)
    > When I go back from `Reset` to `Counter` the NavLink active doesnt change!!!

    -drag and rearrange todos order? (needs to change the order(index) in the db.json)
- **NEXT STEP** Make the todos state persist in the *LocalStorage* after the refresh. [video](https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storages) 
    - setItem(todosNum: todosNum) so that if I go out and go back to ITEM3 page doesnt go back to `http://localhost:3001/item3/3` but it remembers the last parameter I manually put in the URL to filter the number of visible todos.

