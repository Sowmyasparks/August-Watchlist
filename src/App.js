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
  const [searchDisplayText, setSearchDisplayText] = useState("");
  const saveFavItem = (videoData) => {
    try {
      saveFavourite(videoData);
    } catch (err) {
console.error(err);
    }
  };

  const getFav = () => {
    try {
      setSearchResults([]);
    setSearchResults(getFavourites());
    } catch (err) {
      setSearchResults([]);
      setSearchDisplayText("Error fetching details");
    }
    
  };
  const handleSearch = async (queryString) => {
    try {
      const results = await searchVideos(queryString);
      if(results){
        setSearchResults(results);
      } else {
        setSearchDisplayText("Error fetching details");
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <SearchBar searchNow={handleSearch} getFav={getFav} />

      {currentPlayVideoId ? <Player id={currentPlayVideoId} /> : ""}
      {searchResult.length>0 ? <SearchList
        videosData={searchResult}
        saveToFav={saveFavItem}
        playVideo={setcurrentPlayVideoId}
      /> : searchDisplayText}
      
    </div>
  );
}

export default App;
