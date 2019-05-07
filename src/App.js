import React from "react";

import SearchBar from "./Components/Search-Bar";
import TrackList from "./Components/Track-List";
import TrackListItem from "./Components/Track-List-Item";

class App extends React.Component {
  state = {
    tracks: null,
    searchTerm: ""
  };

  onSearchInputChange = e => {
    e.persist();
    const searchTerm = e.target.value;
    this.setState({ searchTerm }, () => {
      if (searchTerm.length > 2) {
        this.searchForMusic();
      }
    });
  };

  searchForMusic = (searchTerm = this.state.searchTerm) => {
    console.log("Searching ", searchTerm);
    fetch(`https://dci-fbw12-search-itunes.now.sh/?term=${searchTerm}`)
      .then(response => response.json())
      .then(data => this.setState({ tracks: data.results }));
  };

  render() {
    const { tracks, searchTerm } = this.state;
    return (
      <div className="App">
        <SearchBar
          onSearchInputChangeHandler={this.onSearchInputChange}
          searchTerm={searchTerm}
        />
        {tracks ? (
          <TrackList tracks={tracks} />
        ) : (
          <div>Search to find music</div>
        )}
      </div>
    );
  }
}

export default App;
