import { connect } from "react-redux";
import {
  setFilterShowAll,
  setFilterShowCompleted,
  setFilterShowActive,
} from "../actions";
import Link from "../components/Link";
import filters from "../filters";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todoApp.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      switch (ownProps.filter) {
        case filters[0]: {
          return dispatch(setFilterShowAll());
        }
        case filters[1]: {
          return dispatch(setFilterShowCompleted());
        }
        case filters[2]: {
          return dispatch(setFilterShowActive());
        }
        default:
        console.log('filtro non gestito');
        return;
      }
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
