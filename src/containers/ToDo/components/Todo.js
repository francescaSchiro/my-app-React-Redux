/*
*   Presentational component. Represents 1 item of the TodoList
*   >>> {text, completed, onClick()}
*/
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import P from "../../../components/P";
import Button from "../../../components/Button";
import Modal from "./Modal";
import ModalWrapper from "./ModalWrapper";
library.add(far);

// import {findIconDefinition} from '@fortawesome/fontawesome-svg-core'
// const trash = findIconDefinition({prefix: 'far', iconName: 'trash-alt'})

const MyIcon = styled.i`
  color: #4e8bed;
`;

const Todo = ({
  onClick,
  completed,
  text,
  show,
  onRemoveClick,
  onShowModalClick,
  onHideModalClick
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
        onClick={onShowModalClick} // dispatch(showModal()),
      >
        <MyIcon className="far fa-trash-alt"> </MyIcon>
      </div>
      {show && (
        <ModalWrapper>
          <Modal>
            <P
              style={{
                color: "#4e8bed"
              }}
            >
              Are you sure you want to delete your todo?
            </P>
            <div
              name="buttonContainer"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%"
              }}
            >
              <Button no type="button" onClick={onHideModalClick}>
                No, jk
              </Button>
              <Button type="button" onClick={onRemoveClick}>
                Yes, delete
              </Button>
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
