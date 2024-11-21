import React from "react";
import Button from "../Button";
import "./style.css";

const SearchItem = ({ data, playVideo, saveToFav }) => {
  return (
    <div className="searchItem">
      <img
        src={data.snippet.thumbnails.medium.url}
        className="searchItemThumbnail"
        alt={data.snippet.title}
      />
      <p className="searchItemTitle">{data.snippet.title}</p>
      <div className="searchItemBtnContainer">
        <button
          className="actionBtn"
          onClick={() => playVideo(data.id.videoId)}
        >
          Play video
        </button>
        <button className="actionBtn" onClick={() => saveToFav(data)}>
          Save to fav
        </button>
      </div>
    </div>
  );
};

export default SearchItem;
