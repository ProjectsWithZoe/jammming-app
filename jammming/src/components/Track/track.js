import React from "react";

const Track = ({ track, onAddToPlaylist, onRemoveFromPlaylist }) => {
  return (
    <div>
      <h3>{track.name}</h3>
      <p>{`${track.artist} | ${track.album}`}</p>
      <button onClick={() => onAddToPlaylist(track)}>Add to Playlist</button>
      <button onClick={() => onRemoveFromPlaylist(track)}>
        Remove From Playlist
      </button>
    </div>
  );
};

export default Track;
