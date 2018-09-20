import React from 'react';
import {Helmet} from 'react-helmet';
import Header from './components/Header/index';
import Counter from './containers/Counter/Loadable';
import AppWrapper from './AppWrapper';
import HomePage from './components/HomePage/Loadable';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CounterSaved from './components/CounterSaved';


export default function App() {
  return(
    <AppWrapper key= "AppWrapper">
      <Helmet
        titleTemplate="%s - this is my practice app"
        defaultTitle= "my practice app"
      >
        <meta name="description:some React Boilerplate exercises" content="React exercises" />      
      </Helmet>
      <Header/>
      {/* <ExerciseWrapper> */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/item1" component={Counter} />
          <Route path="/item2" component={CounterSaved} />
          {/* <Route path="" component={NotFoundPage} /> */}
        </Switch>
      </Router>
       
        {/* <Counter initialValue = {0}/>
        <HomePage/> */}
      {/* </ExerciseWrapper> */}
    </AppWrapper>
  );
}
