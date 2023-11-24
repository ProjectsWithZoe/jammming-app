import React, { useState } from "react";
import "./App.css";
import SearchBar from "/Users/gebruiker/jammming-app/jammming/src/components/SearchBar/searchBar.js";
import Tracklist from "./components/Tracklist/tracklist";
impo;

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const mockSearchResults = [
      {
        id: "1",
        name: "Search Song 1",
        artist: "Search Artist 1",
        album: "Search Album 1",
      },
      {
        id: "2",
        name: "Search Song 2",
        artist: "Search Artist 2",
        album: "Search Album 2",
      },
      {
        id: "3",
        name: "Search Song 3",
        artist: "Search Artist 3",
        album: "Search Album 3",
      },
    ];
    setSearchResults(mockSearchResults);
  };

  const mockTracks = [
    { id: "1", name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: "2", name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { id: "3", name: "Song 3", artist: "Artist 3", album: "Album 3" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1> Spotify Jammming App </h1>
        <SearchBar />
      </header>
      <Tracklist tracks={mockTracks} />
    </div>
  );
}

export default App;
