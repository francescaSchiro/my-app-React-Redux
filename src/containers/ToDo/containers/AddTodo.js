import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

import FormWrapper from "../components/FormWrapper";

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
              text: input.value,
              completed: false,
              id: input.value
            })
          ); // addTodo con input value come parametro 'text' fornito
          input.value = ""; //e resetta il campo dell'input con una stringa vuota
        }}
      >
        <input
          ref={node => {
            //inizializzami la variabile input come il nodo input del DOM.
            input = node; // * così posso utilizzarne l'input.value sopra
          }}
          style={{
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
            marginRight: "1em"
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#ed704d",
            fontFamily: "inherit",
            fontWeight: "bold",
            borderRadius: "1em",
            border: "none",
            color: "whitesmoke",
            padding: "1em",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            cursor: "pointer"
            // focus : { outline:0}
          }}
        >
          Add Todo
        </button>
      </FormWrapper>
    </div>
  );
};

AddTodo = connect()(AddTodo); // se non passo nulla a connect() connect di default passa il metodo dispatch
// lo connetto al componente stesso in modo tale da poterlo riutilizzare sopra
export default AddTodo;
