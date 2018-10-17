/*
*   Presentational component. Represents 1 item of the TodoList
*   >>> {text, completed, onClick()}
*/

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import Modal from "./Modal";
import ModalWrapper from "./ModalWrapper";
import ButtonYesNo from "./ButtonYesNo";
import P from "../../../components/P";
import {
  showModal,
  hideModal
} from "../actions";
library.add(far);


// import {findIconDefinition} from '@fortawesome/fontawesome-svg-core'
// const trash = findIconDefinition({prefix: 'far', iconName: 'trash-alt'})

const Todo = ({
  dispatch,
  onClick,
  completed,
  text,
  show,
  onRemoveClick,
  index
}) => (
  <Fragment>
    <li>
      <div
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none",
          display: "inline-block",
          lineHeight: "2em",
          color: "#ed704d",
          cursor: "pointer"
        }}
      >
        {" "}
        {text}
      </div>
      <div
        style={{
          display: "inline-block",
          marginLeft: "1em",
          cursor: "pointer"
        }}
        onClick={() => dispatch(showModal(index))} // dispatch(showModal()),
      >
        <i className="far fa-trash-alt"> </i>
      </div>
      {show && (
        <ModalWrapper>
          <Modal>
            <P
             style={{
                color: "#4e8bed"
              }}>Are you sure you want to delete your todo?</P>
            <div
              name="buttonContainer"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <ButtonYesNo type="button" onClick={() => dispatch(hideModal(index))}>
                No, jk
              </ButtonYesNo>
              <ButtonYesNo
                style={{
                  backgroundColor: "#4e8bed"
                }}
                type="button"
                onClick={onRemoveClick}
              >
                Yes, delete
              </ButtonYesNo>
            </div>
          </Modal>
        </ModalWrapper>
      )}
    </li>
  </Fragment>
);
// {() => onTodoClick(todo.id)}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
