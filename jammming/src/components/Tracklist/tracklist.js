import React from "react";
import Track from "./track";

const Tracklist = ({ tracks, onAddToPlaylist, onRemoveFromPlaylist }) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAddToPlaylist={onAddToPlaylist}
          onRemoveFromPlaylist={onRemoveFromPlaylist}
        />
      ))}
    </div>
  );
};

export default Tracklist;
