import React, { Component } from "react";
// import FilterLink from "../containers/FilterLink";
import filters from "../filters";
import P from "../../../components/P";
import Span from "../../../components/Span";
import AFilter from "../../../components/AFilter";

export default class Footer extends Component {
  render() {
    const { currentFilter, onFilterClick } = this.props;
    return (
      <P>
        <Span>Filter: </Span>
        {filters.map(filter => {
          return (
            <AFilter
              filter={filter}
              key={filter.id}
              active={currentFilter === filter}
              onClick={e => {
                e.preventDefault();
                onFilterClick(filter);
              }}
            >
              {filter.filterName}
            </AFilter>
          );
        })}
      </P>
    );
  }
}
