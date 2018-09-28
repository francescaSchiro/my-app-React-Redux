import React from "react";
import PropTypes from "prop-types";
// import A from '../../../components/A'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span> {children} </span>;
  }
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault(); //al click non rimanda come di default all'indirizzo(vuoto dell'href)
        onClick(); //ma fa l'azione indicata dopo (l'onClick passato dalle props)
      }}
    >
      {" "}
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
