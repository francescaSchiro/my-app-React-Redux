This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

***
**A PRACTICE PROJECT TO USE REDUX (and STYLED-COMPONENTS)** 
--> in order to understand better React-Boilerplate and it's libraries
*react-redux, react-router-dom, fontawesome, redux-saga* <--

Starting from the clean **Create-React-App** downloaded the process in implementing the Redux store to manage the state followed these steps:

- Create the skeleton with **styled components**. Trying to figure out the scaffolding of the whole app.
(constant process through the steps... Which ones should be *Components or Containers?*) 

- Implemented the **Loadable** library to render components;

- Create the 1st **COUNTER** exercise to increment or decrement by one the counterValue. When 10 or -10 is reached, a message pops up that you reached the limit;

- Create the **routing** between exercises;

- Create the **2nd static exercise** that will display the current counterValue displayed in the other exercise. With a RESET value to initial state( counterValue = 0)

- Create the 3rd exercise, a **To Do list**, with an internal **Redux store, reducers and actions** to manage the change of state. (display list according to the filters(all, active and completed), possibility to toggle to cross out(completed) or not(becomes active) each item of the list). 
----> this project was made following the Redux official documentation. https://redux.js.org/basics

- Following the Tutorial on the **Redux documentation**, the toggle action appeared **bugged**, so I fixed it giving that action a parameter that wasn't the index of the item in the array, but instead a unique id made it the same as the text prop.

- Next I tried to implement another action to practice with the Redux flow. So I created the possibility to **REMOVE Items** from the list by glicking on the trash icon(imported from **fontawesome** https://fontawesome.com/)

- Move the **Redux store** from just local to the 3rd section of the TodoApp, **to the root**, wrapping the whole App in the <code><Provider store ={store}><code> component. Made the **globalReducer** from which any **HOC**(High Order Component) in the app could get access.

- Changed the 1st **Counter** app, working with the usual React state, into a **HOC**(with its actions and reducers) so it could store its state, and access it, globally.

- **Refactoring** of the TodoApp. (lots of changes: Eg. the actions that involves the todos array now they all take the same parameter: the object <code>{todo}<code>.)

- The **Routing** made the whole page refresh everytime I changed section of the app. So now I made every component rerender according to the <code><Link><code> selected **without refreshing** the whole page.

- Fixed the default style of the **Link** with styled-components. Changed it into <code><NavLink><code> imported from 'react-router-dom' so I could use the prop {activeStyle}; Styled the counter buttons.

- Made the **SavedCounter** (section at the ITEM 2): connected it to the **redux store** so it could access the current counterValue to print. Added an action **RESET** to the Counter ones, managed it in the reducer and imported it to use it in the SavedCounter along with the counterValue prop. (did so with the mapStateToProps and mapDispatchToProps and connect methods inside the CounterSaved component )

- Lots of style fixing(bottons, links, ecc) !!! *Couldn't fix the Chrome default blue border on buttons click.* !!!

- Fixed some bugs: TitleWrapper was expanding in height when in HomePage: **flex:1**(!!!NO height: 100vh!!!) on ItemsWrappers' fixed the problem. Fixed also the FilterLinks style that was twitching when one active. 

- Implemented the **NotFoundPage** Component when any path matches;

    - Created models > **data.json** (> array di oggetti todo Example {id: 0, text: 'Learn about actions', completed: false }to fetch Todo entries with a REQUEST_TODOS at componentWillMount lifecycle. The request gets intercepted by **SAGA** middleware to manage the asynchronicity;



