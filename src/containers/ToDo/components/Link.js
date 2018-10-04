import React from "react";
import PropTypes from "prop-types";

import AFilter from "../../../components/AFilter";
import Span from "../../../components/Span";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Span> {children} </Span>;
  }
  return (
    <AFilter
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      style={{
        color: active ? "green" : "#ed704d"
      }}
    >
      {" "}
      {children}
    </AFilter>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
