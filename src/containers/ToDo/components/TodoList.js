/*
*   Presentational component. Represents the list of items in the TodoList
*   >>> {text, completed, onClick()}
*/

import React from 'react';
import PropTypes from 'prop-types';
import Todo from  './Todo';
import styled from 'styled-components';

import P from '../../../components/P';

export const UL = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
list-style: none;
padding-left: 0;
list-style-type: none;
font-style: italic;
` 

const TodoList = ({todos, onTodoClick, onRemoveClick}) => { 
    // console.log(onTodoClick)
    return todos.length > 0 ? (
    <UL>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(todo)} onRemoveClick = {() => onRemoveClick(todo)} /> // al click fai  onTodoClick: index => {
                                                                                // onTodoClick = index => dispatch(toggleTodo(index))
        ))}
    </UL>
):( <P>no items in this list</P>)
} 

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            // id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired, 
    onTodoClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

export default TodoList