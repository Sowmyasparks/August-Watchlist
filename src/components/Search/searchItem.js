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
      <div className="buttonContainer">
        <button
          className="actionButton"
          onClick={() => playVideo(data.id.videoId)}
        >
          {" "}
          Play video{" "}
        </button>
        <button className="actionButton" onClick={() => saveToFav(data)}>
          {" "}
          Save to fav{" "}
        </button>
        {/* <Button label={"Save to fav"}
        info={"save the video to fav list"}
        iconURL={""}
        handleClick={() => saveToFav(data)}
        cssStyling={""}
        isDisabled={false} /> */}
      </div>
    </div>
  );
};

export default SearchItem;
