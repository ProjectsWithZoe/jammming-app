import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "/Users/gebruiker/jammming-app/jammming/src/components/SearchBar/searchBar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Spotify Jammming App </h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
