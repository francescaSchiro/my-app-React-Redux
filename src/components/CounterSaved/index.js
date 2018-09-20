import React from 'react';
import CounterSavedWrapper from './CounterSavedWrapper';
import P from '../P';
import H1 from '../H1';
import A from '../A';

export default class CounterSaved extends React.Component{

  render() {
    return(
      <CounterSavedWrapper key= "CounterSavedWrapper">
        <P> The value of the counter was </P>
        <H1> *Value in Redux Store* </H1>
    <P> {<button>RESET COUNTER BUTTON</button>} </P>
    <A href="/item1">Go back having superfun with the counter</A>
      </CounterSavedWrapper>
    );
  };
}
