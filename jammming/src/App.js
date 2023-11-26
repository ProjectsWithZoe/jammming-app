import React, { useState } from "react";
import "./App.css";
import SearchBar from "/Users/gebruiker/jammming-app/jammming/src/components/SearchBar/searchBar.js";
import Tracklist from "./components/Tracklist/tracklist";
import Playlist from "./components/Playlist/playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

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

  const addTrackToPlaylist = (track) => {
    setPlaylist([...playlist, track]);
  };
  const removeTrackFromPlaylist = (track) => {
    const updatedPlaylist = playlist.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );
    setPlaylist(updatedPlaylist);
  };

  const handleRenamePlaylist = (newPlaylistName) => {
    setPlaylistName(newPlaylistName);
  };

  const savePlaylist = () => {
    const uriArray = playlist.map((track) => track.uri);
    setPlaylist([]);
    setPlaylistName("My Playlist");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Spotify Jammming App </h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <Tracklist
        tracks={searchResults}
        onAddToPlaylist={addTrackToPlaylist}
        onRemoveFromPlaylist={removeTrackFromPlaylist}
      />
      <Playlist
        playlist={playlist}
        playlistName={playlistName}
        onRenamePlaylist={handleRenamePlaylist}
      />
      <button onClick={savePlaylist}>Save</button>
    </div>
  );
}

export default App;
