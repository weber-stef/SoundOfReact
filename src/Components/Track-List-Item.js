import React from "react";

const TrackListItem = props => {
  const {
    trackName,
    artistName,
    collectionName,
    trackPrice,
    currency,
    trackId,
    artworkUrl100
  } = props.trackInfo;

  return (
    <div className="row">
      <div>
        <img src={artworkUrl100} alt={trackName + "- Cover"} />
      </div>
      <div>{trackName}</div>
      <div>{artistName}</div>
      <div>
        <p>{collectionName}</p>
      </div>
      <div>
        {trackPrice == -1 ? "Only album" : trackPrice}
        {currency == "USD" ? (trackPrice == -1 ? "" : "$") : "€"}
      </div>
      <div>
        <i className="fas fa-play" id={trackId} />
        <i className="fas fa-pause" id={trackId} />
      </div>
    </div>
  );
};

export default TrackListItem;
