import React from "react";

import { connect } from "react-redux";
import { addTodo, todosFetchRequest } from "../actions";
import { guid } from "../utils";

import FormWrapper from "../components/FormWrapper";
import ButtonSubmit from "../components/ButtonSubmit";

const inputStyle = () => {
  return {
    textDecoration: "none",
    border: "none",
    fontFamily: "inherit",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    borderRadius: "1em",
    color: "#ed704d",
    padding: "1em",
    textAlign: "center",
    outline: 0,
    marginRight: "1em",
    marginLeft: "1em"
  };
};

let AddTodo = ({ dispatch }) => {
  let input; //dichiaro la variabile input che valorizzo dopo per potere usare node

  return (
    <div>
      <FormWrapper
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            // se, tolti gli spazi,(strina con spazio è true) torna una stringa vuota(false) => !false = true
            return; // esci
          } // se no vai avanti e dispatchami l'azione
          dispatch(
            addTodo({
              id: guid(),
              text: input.value,
              completed: false
            })
          ); // addTodo con input value come parametro 'text' fornito
          input.value = ""; //e resetta il campo dell'input con una stringa vuota
        }}
      >
        <input
          style={inputStyle()}
          ref={node => {
            //inizializzami la variabile input come il nodo input del DOM.
            input = node; // * così posso utilizzarne l'input.value sopra
          }}
        />
        <ButtonSubmit type="submit">Add Todo</ButtonSubmit>
      </FormWrapper>

      {/* input field to limit the number of visible todos */}

      <FormWrapper
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            // se, tolti gli spazi,(stringa con spazio è true) torna una stringa vuota(false) => !false = true
            return; // esci
          } // se no vai avanti e dispatchami l'azione
          dispatch(todosFetchRequest(input.value)); // addTodo con input value come parametro 'text' fornito
          input.value = ""; //e resetta il campo dell'input con una stringa vuota
        }}
      >
        <input
          type="number"
          min="0"
          ref={node => {
            //inizializzami la variabile input come il nodo input del DOM.
            input = node; // * così posso utilizzarne l'input.value sopra
          }}
          style={inputStyle()}
          placeholder="Number of todos"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Number of todos")}
        />
        {/* ${input.value} */}
        {/* <Link to={`/item3/3`}>  */}
          <ButtonSubmit type="submit" style={{backgroundColor: "#4e8bed"}}>Show</ButtonSubmit>
        {/* </Link> */}
        <p> </p>
      </FormWrapper>
    </div>
  );
};

AddTodo = connect()(AddTodo); // se non passo nulla a connect() connect di default passa il metodo dispatch
// lo connetto al componente stesso in modo tale da poterlo riutilizzare sopra
export default AddTodo;
