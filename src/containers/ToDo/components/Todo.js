/*
*   Presentational component. Represents 1 item of the TodoList
*   >>> {text, completed, onClick()}
*/

import React, { Fragment }  from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far)
// import {findIconDefinition} from '@fortawesome/fontawesome-svg-core'
// const trash = findIconDefinition({prefix: 'far', iconName: 'trash-alt'})



const Todo = ({onClick, completed, text, onRemoveClick}) => (
    <Fragment> 
        <li>
            <div onClick = {onClick}
                style= { {
                    textDecoration: completed ? 'line-through' : 'none',
                    display: 'inline-block',
                    lineHeight: '2em',
                    color: '#ed704d',
                    cursor: 'pointer'
                }} 
            > {text}
            </div>
            <div style= {{
                    display: 'inline-block',
                    marginLeft: '1em',
                    cursor: 'pointer'
                    }}
                 onClick= {onRemoveClick}>
                <i className= "far fa-trash-alt" > </i>
            </div>
        </li>
    </Fragment> 
)
// {() => onTodoClick(todo.id)}
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo