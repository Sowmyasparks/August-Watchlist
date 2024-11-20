import React, { useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import "./style.css";

const SearchBar = ({ searchNow, getFav }) => {
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
      setError("*Search input is empty*");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className={`searchSection`}>
      <div className=" searchBarContainer">
        <TextField
          searchInput={searchInput}
          placeholder="Search here...."
          onChange={handleChange}
          onEnter={handleKeyDown}
        />

        <button
          className="generalBtn searchButton"
          onClick={handleSearch}
        ></button>
        <button
          className="generalBtn favButton"
          onClick={() => getFav()}
        ></button>
      </div>

      {error && <p className="errorText">{error}</p>}
    </div>
  );
};

export default SearchBar;
