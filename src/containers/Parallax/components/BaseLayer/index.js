import React, { Component } from "react";
import Wrapper from "./Wrapper";

export default class BaseLayer extends Component {
  render() {
    const { text, height, isDebugActive } = this.props;
    return <Wrapper height={height} isDebugActive= {isDebugActive}>{text}</Wrapper>;
  }
}
