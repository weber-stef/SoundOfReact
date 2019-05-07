import React from "react";
import CountFiles from "./CountFiles";

import TrackListItem from "./Track-List-Item";

const TrackList = props => {
  const { tracks } = props;
  console.log(tracks);
  return (
    <div className="tracklist">
      <h1>The sound of React</h1>
      <CountFiles tracksNum={tracks.length} />
      <div className="row th"><div>Cover</div><div id="track">Track</div><div id="artist" title="sort order">Artist</div><div id="album">Album</div><div>Release date</div><div id="price" title="Sort prices">Price</div><div>Preview</div></div>
      {tracks.map((trackInfo, index) => (
        <TrackListItem trackInfo={trackInfo} key={index} />
      ))}
    </div>
  );
};

export default TrackList;
