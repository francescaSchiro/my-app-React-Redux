import React from "react";
import HomePageWrapper from "./HomePageWrapper";
import P from "../P";
import H1 from "../H1";

export default class HomePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <HomePageWrapper key="HomePageWrapper">
        <H1> BUONGIORNISSIMO! </H1>
        <P>
          <br />
          <br />
          <br />
          <br />
          <br />
           ...caffé?{" "}
        </P>
      </HomePageWrapper>
    );
  }
}
