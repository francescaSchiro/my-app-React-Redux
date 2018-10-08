import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";

import Header from "./components/Header/index";
import Routes from "./Routes";
import AppWrapper from "./AppWrapper";

class App extends PureComponent {

  render() {
    return (
      <AppWrapper key="AppWrapper">
        <Helmet
          titleTemplate="%s - this is my practice app"
          defaultTitle="my practice app"
        >
          <meta
            name="description:some React Boilerplate exercises"
            content="React exercises"
          />
        </Helmet>
        <Header />
        <Routes />
      </AppWrapper>
    );
  }
}

export default (withRouter)(App);
