import React, { Component } from "react";
import Wrapper from "./Wrapper";

export default class BackLayer extends Component {
  render() {
    const { text, height, isDebugActive, top, width } = this.props;
    return <Wrapper height={height} isDebugActive= {isDebugActive}  top={top} width={width}>{text}</Wrapper>;
  }
}
