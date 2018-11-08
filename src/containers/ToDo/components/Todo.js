import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import P from "../../../components/P";
import Button from "../../../components/Button";
import ButtonContainer from "../../../components/ButtonContainer";
import Modal from "./Modal";
import ModalWrapper from "./ModalWrapper";
import MyIcon from "./MyIcon";
import Li from "../../../components/Li";
library.add(far);

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
    <Li todoP>
      <P onClick={onClick} completed={completed} todoP>
        {text}
      </P>
      <div onClick={onShowModalClick}>
        <MyIcon className="far fa-trash-alt" />
      </div>
    </Li>
    {show && (
      <ModalWrapper>
        <Modal modalP>
          <P modalP>Are you sure you want to delete your todo?</P>
          <ButtonContainer>
            <Button no onClick={onHideModalClick}>
              No, jk
            </Button>
            <Button onClick={onRemoveClick}>Yes, delete</Button>
          </ButtonContainer>
        </Modal>
      </ModalWrapper>
    )}
  </Fragment>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
