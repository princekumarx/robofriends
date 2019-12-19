import React from "react";

const SearchBox = props => {
  const { holdup } = props;
  return (
    <div className=" pa2">
      <input
        onChange={holdup}
        className=" pa3 ba bg-light-green"
        type="search"
        placeholder="serch robots"
      />
    </div>
  );
};

export default SearchBox;
