import React, { PureComponent } from "react";

import WrapperIndex from "./WrapperIndex";

import LayersGroup from "./components/LayersGroup/Wrapper";
import BackLayer from "./components/BackLayer/Wrapper";
import DeepBackLayer from "./components/DeepBackLayer/Wrapper";
import BaseLayer from "./components/BaseLayer/Wrapper";

class Parallax extends PureComponent {
  render() {
    return (
      <WrapperIndex id="parallax">
        <LayersGroup id="group1" zIndex={5}>
          <BaseLayer id="parallax__layer parallax__layer--base" zIndex={4}>
            <div> BaseLayer </div>
          </BaseLayer>
        </LayersGroup>
        <LayersGroup id="group2" zIndex={3}>
          <DeepBackLayer
            id="parallax__layer parallax__layer--deepback"
            zIndex={2}
          >
            <div> DeepBackLayer </div>
          </DeepBackLayer>
          <BaseLayer id="parallax__layer parallax__layer--base" zIndex={4}>
            <div> BaseLayer </div>
          </BaseLayer>
          <BackLayer id="parallax__layer parallax__layer--back" zIndex={3}>
            <div> BackLayer </div>
          </BackLayer>
        </LayersGroup>
        <LayersGroup id="group3" zIndex={4}>
          <BaseLayer id="parallax__layer parallax__layer--base" zIndex={4}>
            <div> BaseLayer </div>
          </BaseLayer>
        </LayersGroup>
        <LayersGroup id="group4" zIndex={2}>
          <BaseLayer id="parallax__layer parallax__layer--base" zIndex={4}>
            <div> BaseLayer </div>
          </BaseLayer>
          <BackLayer id="parallax__layer parallax__layer--back" zIndex={3}>
            <div> BackLayer </div>
          </BackLayer>
          <DeepBackLayer
            id="parallax__layer parallax__layer--deepback"
            zIndex={2}
          >
            <div> DeepBackLayer </div>
          </DeepBackLayer>
        </LayersGroup>
        <LayersGroup id="group5" zIndex={3}>
          <BaseLayer id="parallax__layer parallax__layer--base" zIndex={4}>
            <div> BaseLayer </div>
          </BaseLayer>
        </LayersGroup>
        <LayersGroup id="group6" zIndex={2}>
          <BackLayer id="parallax__layer parallax__layer--back" zIndex={3}>
            <div> BackLayer </div>
          </BackLayer>
          <BaseLayer id="parallax__layer parallax__layer--base" zIndex={4}>
            <div> BaseLayer </div>
          </BaseLayer>
        </LayersGroup>
        <LayersGroup id="group7" zIndex={3}>
          <BaseLayer id="parallax__layer parallax__layer--base" zIndex={4}>
            <div> BaseLayer </div>
          </BaseLayer>
          <DeepBackLayer
            id="parallax__layer parallax__layer--deepback"
            zIndex={2}
          >
            <div> DeepBackLayer </div>
          </DeepBackLayer>
        </LayersGroup>
        <LayersGroup id="group8" zIndex={5}>
          <BaseLayer id="parallax__layer parallax__layer--base" zIndex={4}>
            <div> BaseLayer </div>
          </BaseLayer>
        </LayersGroup>
      </WrapperIndex>
    );
  }
}

export default Parallax;

/* <LayersGroup id="parallax__group" zIndex={-5}> */
