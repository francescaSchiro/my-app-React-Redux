import {connect} from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import TodoList from '../components/TodoList'


const getVisibleTodos = (todos,filter) => {
    console.log('TODOS', todos)
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed) //ritornami solo i todos dove completed=true
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

// to use connect(), we need to define a special func called mapStateToProps
// that describes how to transform the current Redux store state into the props you want to pass
// to a Presentational Component you are wrapping. 
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter)  //VisibleTodoList needs to calculate todos to pass to the TodoList
    }                                                                // so we define a function that filters the state.todos
}                                                                    // according to the state.visibilityFilter, and use it in its mapStateToProps

//In addition to reading the state, container components can DISPATCH actions. In a similar fashion, you can
// define a function called mapDispatchToProps() that receives the dispatch() method
// and returns CALLBACK props that you want to inject into the presentational component. For example:
// we want the VisibleToDoList to inject a prop called onTodoClick into the TodoList component,
// and we want onTodoClick to dispatch a TOGGLE_TODO action:

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onRemoveClick: (id) => {
            dispatch(removeTodo(id))
        }
    }
}


const VisibleTodoList = connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList) // vuoi che queste props dello stato vengano passate, "connesse" al componente presentational Link

export default VisibleTodoList