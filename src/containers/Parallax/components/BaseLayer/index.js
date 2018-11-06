import React, { Component } from "react";
import Wrapper from "./Wrapper";
import H2 from "../H2";

export default class BaseLayer extends Component {
  render() {
    const { text, height, isDebugActive, top, width, margin} = this.props;
    return <Wrapper isDebugActive= {isDebugActive} top={top} width={width} height={height} margin={margin} 
    >
    <H2 id="h2"> {text} </H2>
    </Wrapper>;
  }
}


// style ={{
//   backgroundImage: "linear-gradient(to top, magenta , transparent)"
// }}
