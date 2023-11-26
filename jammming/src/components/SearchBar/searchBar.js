import React, { useState } from "react";
import "./searchBar.module.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const search = () => {
    console.log("Searching for", searchTerm);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Enter a song, artist or album"
        value={searchTerm}
        onChange={handleTermChange}
      />
      <button className="SearchButton" onSearch={search}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
