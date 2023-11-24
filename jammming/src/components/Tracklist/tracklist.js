import React from "react";
import Track from "./track";

const Tracklist = ({ tracks }) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};
