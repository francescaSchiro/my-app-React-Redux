/*
*   Presentational component. Represents 1 item of the TodoList
*   >>> {text, completed, onClick()}
*/

import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text}) => (
    <li
        onClick = {onClick}
        style= { {
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >   {text}
    </li> 
)

Todo.propTypes = {
    onClick: PropTypes.func.inRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo