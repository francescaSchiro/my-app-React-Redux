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
        e.preventDefault(); //al click non rimanda come di default all'indirizzo(vuoto dell'href)
        onClick(); //ma fa l'azione indicata dopo (l'onClick passato dalle props)
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
