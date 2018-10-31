import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import WrapperIndex from "./WrapperIndex";

import LayersGroup from "./components/LayersGroup/Wrapper";
import BackLayer from "./components/BackLayer/index";
import DeepBackLayer from "./components/DeepBackLayer/index";
import BaseLayer from "./components/BaseLayer/index";
import { toggleDebug } from "./actions";


class Parallax extends PureComponent {
  render() {

    const {
      isDebugActive,
      onDebugClick
    } = this.props;

    return (
 
      <WrapperIndex id="parallax"  isDebugActive={isDebugActive}>
        <button 
          onClick={() => onDebugClick()}
          style={{
          position:"fixed",
          top: 0,
          zIndex: 100,
        }}>Debug</button>
        <LayersGroup id="group1" zIndex={5} border={"6px solid purple"} isDebugActive={isDebugActive} >
          <BaseLayer id="parallax__layer parallax__layer--base" text={"Base1"} height={"250px"} isDebugActive={isDebugActive} />
        </LayersGroup>
        <LayersGroup id="group2" zIndex={2} border={"6px solid green"} isDebugActive={isDebugActive}>
          <DeepBackLayer id="parallax__layer parallax__layer--deepback" text={"Deep2"} isDebugActive={isDebugActive} />
          <BaseLayer id="parallax__layer parallax__layer--base" text={"Base2"} isDebugActive={isDebugActive}/>
          <BackLayer id="parallax__layer parallax__layer--back" text={"Back2"} isDebugActive={isDebugActive}/>
        </LayersGroup>
        <LayersGroup id="group3" zIndex={4} border={"6px solid grey"} isDebugActive={isDebugActive}>
          <BaseLayer id="parallax__layer parallax__layer--base" text={"Base3"} isDebugActive={isDebugActive} />
          {/* <BackLayer id="parallax__layer parallax__layer--back" text={"Back3"}/> */}
        </LayersGroup>
        {/* <LayersGroup id="group4" zIndex={2}>
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
        </LayersGroup> */}
      </WrapperIndex>
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

/* <LayersGroup id="parallax__group" zIndex={-5}> */
