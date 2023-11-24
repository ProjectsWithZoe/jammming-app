import React, { useState } from "react";
import "./searchBar.module.css";

function SearchBar() {
  const [term, setTerm] = useState("");

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };
  const search = () => {
    console.log("Searching for", term);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter a song, artist or album"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={search}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
