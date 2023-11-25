import React from "react";

const Playlist = ({ playlistName, playlist }) => {
  return (
    <div>
      <h2>{playlistName}</h2>
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
