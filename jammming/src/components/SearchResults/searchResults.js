import React, { useState } from "react";
import styles from "./searchResults.module.css";

function SearchResults({ searchResults, searchTerm, searchButtonClicked }) {
  const [playlist, setPlaylist] = useState([]);
  const addToPlaylist = (item) => {
    setPlaylist([...playlist, item]);
    console.log("clicked");
    console.log(playlist);
  };
  return (
    <div>
      <h3>Search Results for '{searchButtonClicked ? searchTerm : ""}'</h3>
      {searchResults.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} | {item.artist} | {item.album} |{" "}
            <button
              className={styles.button}
              onClick={() => addToPlaylist(item)}
            >
              +
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
