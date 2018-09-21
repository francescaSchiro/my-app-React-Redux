/*
*   Presentational component. Represents the list of items in the TodoList
*   >>> {text, completed, onClick()}
*/

import React from 'react'
import PropTypes from 'prop-types'
import Todo from  './Todo'

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: Proptypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired, 
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList