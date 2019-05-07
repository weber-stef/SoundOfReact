import React from "react";

import TrackListItem from "./Track-List-Item";

const TrackList = props => {
  const { tracks } = props;
  console.log(tracks);
  return (
    <div className="tracklist">
      {tracks.map((trackInfo, index) => (
        <TrackListItem trackInfo={trackInfo} key={index} />
      ))}
    </div>
  );
};

export default TrackList;
