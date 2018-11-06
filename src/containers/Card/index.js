import React, { PureComponent } from "react";

import WrapperIndex from "./WrapperIndex";

import SingleCard from "./components/SingleCard/index";

class Card extends PureComponent {
  render() {
    return (
      <WrapperIndex>
        <SingleCard />
      </WrapperIndex>
    );
  }
}

export default Card;
