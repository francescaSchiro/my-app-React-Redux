import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import HeaderWrapper from "./HeaderWrapper";
import Title from "./Title";
import NavBar from "./NavBar";
import {toggleMenu} from './actions';

class Header extends PureComponent {
  render() {
    const { menuIsVisible, onMenuClick } = this.props;
    return (
      <HeaderWrapper key="HeaderWrapper">
        <Title menuIsVisible={ menuIsVisible } onMenuClick={onMenuClick} />
        <NavBar menuIsVisible={ menuIsVisible } onMenuClick={onMenuClick} />
      </HeaderWrapper>
    );
  }
}


function mapStateToProps(state){
  return{
    menuIsVisible: state.header.menuIsVisible,
  };
}

function mapDispatchToProps(dispatch){
  return{
    dispatch,
    onMenuClick: () => dispatch(toggleMenu()), 
  }
}



const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Header);
