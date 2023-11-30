import React, { useState } from "react";
import Spotify from "../../util/spotify";
import SearchResults from "../SearchResults/searchResults";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    Spotify.search(searchTerm).then((data) => {
      setSearchResults(data);
    });
  };
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Enter a song, artist, or album"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <SearchResults searchResults={searchResults} searchTerm={searchTerm} />
    </div>
  );
}

export default SearchBar;
