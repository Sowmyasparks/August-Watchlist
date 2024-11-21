import React from "react";
import Button from "../Button";
import "./style.css";

const SearchItem = ({ data, playVideo, saveToFav }) => {
  const title = data.snippet.title;
  return (
    <div className="searchItem" aria-label={`Search result of ${title}`}>
      <img
        src={data.snippet.thumbnails.medium.url}
        className="searchItemThumbnail"
        alt={`Thumbnail of ${title}`}
      />
      <p className="searchItemTitle">{title}</p>
      <div className="searchItemBtnContainer">
        <Button
          label={"Play video"}
          handleClick={() => playVideo(data.id.videoId)}
        />
        <Button label={"Save to fav"} handleClick={() => saveToFav(data)} />
      </div>
    </div>
  );
};

export default SearchItem;
