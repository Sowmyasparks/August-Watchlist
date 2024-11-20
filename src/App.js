import { useState } from "react";
import "./App.css";
import SearchBar from "./components/Search/searchBar";
import SearchList from "./components/Search/searchList";
import Player from "./components/Player";
import { searchVideos } from "./services";
import { saveFavourite, getFavourites } from "./util/localStorage";

function App() {
  const [searchResult, setSearchResults] = useState([]);
  const [currentPlayVideoId, setcurrentPlayVideoId] = useState("");
  const saveFavItem = (videoData) => {
    try {
      saveFavourite(videoData);
    } catch (err) {
console.error(err);
    }
  };

  const getFav = () => {
    setSearchResults(getFavourites());
  };
  const handleSearch = async (queryString) => {
    try {
      const results = await searchVideos(queryString);
      setSearchResults(results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <SearchBar searchNow={handleSearch} getFav={getFav} />

      {currentPlayVideoId ? <Player id={currentPlayVideoId} /> : ""}
      <SearchList
        videosData={searchResult}
        saveToFav={saveFavItem}
        playVideo={setcurrentPlayVideoId}
      />
    </div>
  );
}

export default App;
