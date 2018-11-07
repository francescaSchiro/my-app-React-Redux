import React from "react";
import FilterLink from "../containers/FilterLink";
import filters from "../filters";
import P from "../../../components/P";
import Span from "../../../components/Span";

const Footer = () => (
  <P>
    <Span>Filter: </Span>
    {filters.map(filter => {
      return <FilterLink filter={filter}> {filter.filterName} </FilterLink>;
    })}
  </P>
);

export default Footer;
