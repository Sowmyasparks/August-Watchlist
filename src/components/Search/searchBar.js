import React, { useState } from "react";
import TextField from "../TextField";
import "./style.css";

const SearchBar = ({ searchNow, getFav, showFav }) => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    setError("");
    e.preventDefault();
    if (searchInput.trim()) {
      searchNow(searchInput);
    } else {
      setError("Search input is empty. Type your search and try again ...");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="searchContainer">
      <div className=" searchBarContainer">
        <TextField
          searchInput={searchInput}
          placeholder={error ? error : "Search here...."}
          onChange={handleChange}
          onEnter={handleKeyDown}
        />
        <button
          className="searchIconBtn searchButton"
          onClick={handleSearch}
        ></button>
      </div>
      {showFav ? (
        <button className="actionBtn" onClick={() => getFav()}>
          Show Favourites
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
