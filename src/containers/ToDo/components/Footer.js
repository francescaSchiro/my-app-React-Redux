import React from "react";
import FilterLink from "../containers/FilterLink";
import filters from "../filters";
import P from "../../../components/P";
import Span from "../../../components/Span";

const Footer = () => (
  <P>
    <Span>Filter: </Span>
    {/* {
      filters.map( (el,i) => {
        return (
          <FilterLink filter={filter[i]}> {filter[i].id} </FilterLink>
        )
      })
    } */}

    <FilterLink filter={filters[0]}>All</FilterLink>
    <FilterLink filter={filters[1]}>Completed</FilterLink>
    <FilterLink filter={filters[2]}>Active</FilterLink>
  </P>
);

export default Footer;

//         <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
