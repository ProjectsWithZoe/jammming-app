import React from "react";

function SearchResults({ searchResults, searchTerm }) {
  return (
    <div>
      <h3>Search Results for '{searchTerm}'</h3>
      <div>
        {searchResults.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} | {item.artist} | {item.album}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
