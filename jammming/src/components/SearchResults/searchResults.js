import React, { useState } from "react";

function SearchResults({ searchResults, searchTerm, searchButtonClicked }) {
  return (
    <div>
      <h3>Search Results for '{searchButtonClicked ? searchTerm : ""}'</h3>
      <div>
        {searchResults.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} | {item.artist} | {item.album}
            </p>
            <button>Add to playlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
