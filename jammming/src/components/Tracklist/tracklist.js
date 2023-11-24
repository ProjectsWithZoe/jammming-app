import React from "react";
import Track from "./track";

const Tracklist = ({ tracks, onAddToPlaylist }) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} track={track} onAddToPlaylist={onAddToPlaylist} />
      ))}
    </div>
  );
};

export default Tracklist;
