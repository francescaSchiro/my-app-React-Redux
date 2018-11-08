import React, { Component } from "react";
import { guid } from "../../../utils";

import FormWrapper from "./FormWrapper";
import Button from "../../../components/Button";
import Input from "./Input";

// export default class AddTodo extends Component ({ dispatch, todosNum }) => {

export default class AddTodo extends Component {

render(){
  const {
    onAddTodoClick,
    todosFetchRequest,
    todosNum
  } = this.props;

  let inputAdd;
  let inputShow;

  return (
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
            );// addTodo con input value come parametro 'text' fornito
          inputAdd.value = ""; //e resetta il campo dell'input con una stringa vuota
        }}
      >
        <Input
          // style={inputStyle()}
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

      {/* input field to limit the number of visible todos */}

      <FormWrapper
        onSubmit={e => {
          e.preventDefault();
          if (!inputShow.value.trim()) {
            // se, tolti gli spazi,(stringa con spazio è true) torna una stringa vuota(false) => !false = true
            return; // esci
          } // se no vai avanti e dispatchami l'azione
          todosFetchRequest(inputShow.value); // addTodo con input value come parametro 'text' fornito
          inputShow.value = ""; //e resetta il campo dell'input con una stringa vuota
        }}
      >
        <Button type="submit">Show</Button>
        <Input
          type="number"
          min="0"
          innerRef={node => {
            //inizializzami la variabile input come il nodo input del DOM.
            inputShow = node; // * così posso utilizzarne l'input.value sopra
          }}
          // style={inputStyle()}
          placeholder="Number of todos"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Number of todos")}
        />
      </FormWrapper>
    </div>
  );
        }
};

