import React from "react";

function Search({ searchText, setSearchText }) {
  return (
    <div className="search">
      <div className="title">Search Tickets:</div>
      <div className="input">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
