import React from "react";
import { connect } from "react-redux";
import { addTodo, todosFetchRequest } from "../actions";
import { guid } from "../utils";

import FormWrapper from "../components/FormWrapper";
import ButtonSubmit from "../components/ButtonSubmit";
import Input from "../components/Input";

let AddTodo = ({ dispatch, todosNum }) => {
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
          dispatch(
            addTodo(
              {
                id: guid(),
                text: inputAdd.value,
                completed: false,
                show: false
              },
              todosNum
            )
          ); // addTodo con input value come parametro 'text' fornito
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
        <ButtonSubmit type="submit">Add Todo</ButtonSubmit>
      </FormWrapper>

      {/* input field to limit the number of visible todos */}

      <FormWrapper
        onSubmit={e => {
          e.preventDefault();
          if (!inputShow.value.trim()) {
            // se, tolti gli spazi,(stringa con spazio è true) torna una stringa vuota(false) => !false = true
            return; // esci
          } // se no vai avanti e dispatchami l'azione
          dispatch(todosFetchRequest(inputShow.value)); // addTodo con input value come parametro 'text' fornito
          inputShow.value = ""; //e resetta il campo dell'input con una stringa vuota
        }}
      >
        <ButtonSubmit type="submit">Show</ButtonSubmit>
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
};

AddTodo = connect()(AddTodo); // se non passo nulla a connect() connect di default passa il metodo dispatch
// lo connetto al componente stesso in modo tale da poterlo riutilizzare sopra
export default AddTodo;
