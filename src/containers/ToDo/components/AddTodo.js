import React from "react";
import { guid } from "../../../utils";

import FormWrapper from "./FormWrapper";
import Button from "../../../components/Button";
import Input from "./Input";

let inputAdd;
let inputShow;

const AddTodo = ({ onAddTodoClick, todosFetchRequest, todosNum }) => (
  <div>
    <FormWrapper
      onSubmit={e => {
        e.preventDefault();
        if (!inputAdd.value.trim()) {
          return;
        }
        onAddTodoClick(
          {
            id: guid(),
            text: inputAdd.value,
            completed: false,
            show: false
          },
          todosNum
        );
        inputAdd.value = "";
      }}
    >
      <Input
        innerRef={node => {
          //inizializzami la variabile input come il nodo input del DOM.
          inputAdd = node; // * così posso utilizzarne l'input.value sopra
        }}
        placeholder="Type next thing to do"
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = "Type next thing to do")}
      />
      <Button type="submit">Add Todo</Button>
    </FormWrapper>

    <FormWrapper
      onSubmit={e => {
        e.preventDefault();
        if (!inputShow.value.trim()) {
          return;
        }
        todosFetchRequest(inputShow.value);
        inputShow.value = "";
      }}
    >
      <Button type="submit">Show</Button>
      <Input
        type="number"
        min="0"
        innerRef={node => {
          inputShow = node;
        }}
        placeholder="Number of todos"
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = "Number of todos")}
      />
    </FormWrapper>
  </div>
);

export default AddTodo;
