import React, { PureComponent } from "react";

import WrapperIndex from "./WrapperIndex";

import Card from "./components/Card/index";

class Item5 extends PureComponent {
  render() {
    return (
      <WrapperIndex>
        <Card />
      </WrapperIndex>
    );
  }
}

export default Item5;
