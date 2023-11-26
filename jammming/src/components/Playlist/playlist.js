import React, { useState } from "react";

const Playlist = ({ playlistName, playlist, onRenamePlaylist }) => {
  const [isEditing, setEditing] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState(playlistName);

  const handleRenamePlaylist = () => {
    onRenamePlaylist(newPlaylistName);
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
          />
          <button onClick={handleRenamePlaylist}>Save</button>
        </div>
      ) : (
        <h2 onClick={() => setEditing(true)}>{playlistName}</h2>
      )}
      <ul>
        {playlist.map((track) => (
          <li
            key={track.id}
          >{`${track.name} - ${track.artist} - ${track.album}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
