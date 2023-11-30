import React, { useState } from "react";
import Spotify from "../../util/spotify";
import SearchResults from "../SearchResults/searchResults";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchButtonClicked(false);
  };

  const handleSearch = () => {
    Spotify.search(searchTerm).then((data) => {
      setSearchResults(data);
      setSearchButtonClicked(true);
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
      <SearchResults
        searchResults={searchResults}
        searchTerm={searchTerm}
        searchButtonClicked={searchButtonClicked}
      />
    </div>
  );
}

export default SearchBar;
