import React from "react";
import SearchItem from "./searchItem";
import "./style.css";

const SearchList = ({ videosData, saveToFav, playVideo }) => {
  return (
    <div className="searchList">
      {videosData.map((d) => (
        <SearchItem
          key={d.id.videoId}
          data={d}
          playVideo={playVideo}
          saveToFav={saveToFav}
        />
      ))}
    </div>
  );
};

export default SearchList;
