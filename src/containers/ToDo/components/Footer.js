import React from "react";
import FilterLink from "../containers/FilterLink";
import filters from "../filters";
import P from "../../../components/P";
import Span from "../../../components/Span";


const Footer = () => (
  <P>
    <Span>Filter: </Span>
    {""}
    <FilterLink filter={filters.ALL} >All</FilterLink>
    {", "}
    <FilterLink filter={filters.ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={filters.COMPLETED}>Completed</FilterLink>
  </P>
);

export default Footer;

//         <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
