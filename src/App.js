import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import SearchBar from "./components/Search/searchBar";
import SearchList from "./components/Search/searchList";
import Player from "./components/Player";
import PopUp from "./components/PopUp";
import { searchVideos } from "./services";
import { saveFavourite, getFavourites } from "./util/localStorage";

function App() {
  const [searchResult, setSearchResults] = useState([]);
  const [currentPlayVideoId, setCurrentPlayVideoId] = useState("");
  const [searchDisplayText, setSearchDisplayText] = useState("");
  const [showFav, setShowfav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const setEmptyData = (text) => {
    setSearchResults([]);
    setSearchDisplayText(text);
  };
  const saveFavItem = (videoData) => {
    try {
      const saveSuccess  = saveFavourite(videoData);
      if(saveSuccess){
        setShowfav(true);
        setIsOpen(true);
        setPopupMsg(" Favourite saved successfully ");
      } else {
        setShowfav(true);
        setIsOpen(true);
        setPopupMsg(" Favourite is added previously ");
      }
     
    } catch (err) {
      console.error(err);
    }
  };
  const getFav = () => {
    try {
      const favourites = getFavourites();
      if (favourites?.length > 0) {
        setSearchResults(favourites);
        setSearchDisplayText("");
      } else {
        setEmptyData("No favourites available");
      }
    } catch (err) {
      console.error(err);
      setEmptyData("Error fetching details");
    }
  };
  const handleSearch = useCallback(async (queryString) => {
    try {
      const results = await searchVideos(queryString);
      if (results?.length > 0) {
        setSearchResults(results);
        setSearchDisplayText("");
      } else {
        setEmptyData("No search details available");
      }
    } catch (err) {
      console.error(err);
      setEmptyData("No search details available");
    }
  }, []);
  useEffect(() => {
    const preSavedFav = getFavourites();
    if (preSavedFav?.length > 0) {
      setShowfav(true);
    }
  }, []);
  return (
    <div className="App">
      <SearchBar searchNow={handleSearch} getFav={getFav} showFav={showFav} />
      {currentPlayVideoId ? <Player id={currentPlayVideoId} /> : ""}
      {searchResult?.length > 0 ? (
        <SearchList
          videosData={searchResult}
          saveToFav={saveFavItem}
          playVideo={setCurrentPlayVideoId}
        />
      ) : (
        <p className="infoText">{searchDisplayText}</p>
      )}
      <PopUp
        isOpen={isOpen}
        info={popupMsg}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default App;
