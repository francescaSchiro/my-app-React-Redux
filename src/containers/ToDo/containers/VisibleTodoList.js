import {connect} from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'


const getVisibleTodos = (todos,filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}


const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}


// we want the VisibleToDoList to inject a prop called onTodoClick into the TodoList component,
// and we want onTodoClick to dispatch a TOGGLE_TODO action:
// in addition to READING state, Container components can DISPATCH ACTIONS

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}


const VisibleTodoList = connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList) // vuoi che queste props dello stato vengano passate, "connesse" al componente presentational Link

export default VisibleToooList