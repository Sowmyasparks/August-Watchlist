import React, { useEffect, useState } from "react";
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
  const [showfav, setShowfav] = useState(false);
  const saveFavItem = (videoData) => {
    try {
      saveFavourite(videoData);
      setShowfav(true);
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
  useEffect(() => {
    const preSavedFav = getFavourites();
    if (preSavedFav && preSavedFav.length > 0){
      setShowfav(true);
    }}, [])
  return (
    <div className="App">
      <SearchBar searchNow={handleSearch} getFav={getFav} showfav={showfav}/>

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
