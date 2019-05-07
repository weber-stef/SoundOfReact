import React from "react";

const SearchBar = props => {
  return (
    < input
      value={props.searchTerm}
      onChange={props.onSearchInputChangeHandler}
      placeholder="Search to find music"
    />
  );
};

export default SearchBar;
