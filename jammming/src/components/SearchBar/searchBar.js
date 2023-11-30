import React, { useState } from "react";
import Spotify from "../../util/spotify";

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
      <div>
        <h2> Search Results for '{searchTerm}'</h2>
        {searchResults.map((item, index) => (
          <div key={index}>
            <p>
              {" "}
              Song: {item.name} | Artist: {item.artist} | Album: {item.album}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
