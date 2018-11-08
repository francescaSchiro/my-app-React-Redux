import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import WrapperIndex from "./WrapperIndex";

import LayersGroup from "./components/LayersGroup/Wrapper";
import BackLayer from "./components/BackLayer/index";
import DeepBackLayer from "./components/DeepBackLayer/index";
import BaseLayer from "./components/BaseLayer/index";
import Button from "./components/Button";
import ParallaxGlobalWrap from "./components/ParallaxGlobalWrap";

import { toggleDebug } from "./actions";

class Parallax extends PureComponent {
  render() {
    const { isDebugActive, onDebugClick } = this.props;

    return (
      <ParallaxGlobalWrap>
        <Button isDebugActive={isDebugActive} onClick={() => onDebugClick()}>
          {" "}
          {isDebugActive ? "2D View" : "3D View"}{" "}
        </Button>
        <WrapperIndex id="parallax" isDebugActive={isDebugActive}>
          <LayersGroup
            id="group1"
            zIndex={2}
            border={"6px solid purple"}
            isDebugActive={isDebugActive}
            height={"500px"}
            top={"0"}
          >
            <DeepBackLayer
              id="Deep1"
              text={"Deep1"}
              height={"300px"}
              top={"-50%"}
              isDebugActive={isDebugActive}
            />
            <BaseLayer
              id="Base1"
              text={"Base1"}
              width={"60%"}
              height={"250px"}
              top={"10%"}
              margin={"0 0 auto auto"}
              isDebugActive={isDebugActive}
            />
          </LayersGroup>

          <LayersGroup
            id="group2"
            zIndex={3}
            border={"6px solid green"}
            isDebugActive={isDebugActive}
            height={"300px"}
            top={"0"}
          >
            <DeepBackLayer
              id="Deep2"
              text={"Deep2"}
              height={"200px"}
              top={"0"}
              isDebugActive={isDebugActive}
            />
            <BaseLayer
              id="Base2"
              text={"Base2"}
              isDebugActive={isDebugActive}
            />
            <BackLayer
              id="Back2"
              text={"Back2"}
              isDebugActive={isDebugActive}
            />
          </LayersGroup>

          <LayersGroup
            id="group3"
            zIndex={4}
            border={"6px solid grey"}
            isDebugActive={isDebugActive}
            height={"300px"}
            top={"400px"}
          >
            <BaseLayer
              id="Base3"
              text={"Base3"}
              isDebugActive={isDebugActive}
            />
            <DeepBackLayer
              id="Deep3"
              text={"Deep3"}
              height={"300px"}
              
              // top={"300px"}
              isDebugActive={isDebugActive}
            />
            {/* <BackLayer id="parallax__layer parallax__layer--back" text={"Back3"}/> */}
          </LayersGroup>

          {/* <LayersGroup id="group4" zIndex={2}>
          <BaseLayer id="parallax__layer parallax__layer--base" zIndex={4}>
            <div> BaseLayer </div>
          </BaseLayer>
          <BackLayer id="parallax__layer parallax__layer--back" zIndex={3}>
            <div> BackLayer </div>
        >  </BackLayer>
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
        </LayersGroup> */}
        </WrapperIndex>
      </ParallaxGlobalWrap>
    );
  }
}

function mapStateToProps(state) {
  return {
    isDebugActive: state.parallax.isDebugActive
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onDebugClick: () => dispatch(toggleDebug())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Parallax);
