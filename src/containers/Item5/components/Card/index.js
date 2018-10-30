import React, { Component } from "react";
import CardWrapper from "./CardWrapper";
import H1 from "../../../../components/H1";
import P from "../../../../components/P";

export default class Card extends Component {
  render() {
    return (
      <CardWrapper>
        <H1> Card Title</H1>
        <hr></hr>
        <P style={{
            fontSize: ".7em",
            textAlign: "left",

        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
          tristique massa at finibus. Sed pharetra tincidunt ipsum in egestas.
          Ut ut lacus nec augue viverra tempor. Pellentesque lacus purus,
          pellentesque et nibh at, gravida dictum augue.
        </P>
      </CardWrapper>
    );
  }
}
