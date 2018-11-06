import React, { Component } from "react";
import Wrapper from "./Wrapper";

export default class DeepBackLayer extends Component {
  render() {
    const { text, height, isDebugActive, top} = this.props;
    return <Wrapper height={height}  isDebugActive= {isDebugActive}  top={top} >{text}</Wrapper>;
  }
}
