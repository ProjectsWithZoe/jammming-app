import React, { useState } from "react";
import "./App.css";
import SearchBar from "/Users/gebruiker/jammming-app/jammming/src/components/SearchBar/searchBar.js";
import Tracklist from "./components/Tracklist/tracklist";
import Playlist from "./components/Playlist/playlist";
import Spotify from "./util/spotify";
import SearchResults from "./components/SearchResults/searchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  const handleSearch = () => {
    if (!searchTerm) return;

    Spotify.search(searchTerm).then((results) => {
      setSearchResults(results);
    });
  };

  const addToPlaylist = (item) => {
    setPlaylist([...playlist, item]);
    console.log("clicked");
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

  const authenticate = () => {
    const token = Spotify.getAccessToken();
    console.log(token);
  };

  const getUserId = () => {
    const userId = Spotify.getUserId();
    console.log(userId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify Jammming App</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <Tracklist
        tracks={searchResults}
        onAddToPlaylist={addToPlaylist}
        onRemoveFromPlaylist={removeTrackFromPlaylist}
      />
      <Playlist
        playlist={playlist}
        playlistName={playlistName}
        onRenamePlaylist={handleRenamePlaylist}
      />
      <SearchResults searchResults={searchResults} searchTerm={searchTerm} />
      <button onClick={savePlaylist}>Save</button>
      <button onClick={authenticate}>Authenticate</button>
    </div>
  );
}

export default App;
