import React, { useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import "./style.css";

const SearchBar = ({ searchNow, getFav, showFav }) => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setError("");
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
          placeholder={error || "Search here...."}
          onChange={handleChange}
          onEnter={handleKeyDown}
        />
        <button
          className="searchIconBtn searchButton"
          onClick={handleSearch}
          aria-label="Search"
        ></button>
      </div>
      {showFav ? (
        <Button label={"Show Favourites"} handleClick={() => getFav()} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
