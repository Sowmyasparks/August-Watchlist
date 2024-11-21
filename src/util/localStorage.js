const LOCAL_KEY = "augustFav";
export const saveFavourite = (data) => {
  try {
    const prevFav = JSON.parse(localStorage.getItem(LOCAL_KEY));
    const alreadyFav = prevFav
      ? prevFav.some((d) => d.id.videoId === data.id.videoId)
      : false;
    if (!alreadyFav) {
      let updatedFav = [];
      if (prevFav) {
        updatedFav = [...prevFav, data];
      } else {
        updatedFav = [data];
      }
      localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedFav));
      return(true);
    } else {
      console.error("The item is already added to favourites");
      return(false);
    }
  } catch (e) {
    console.error("Error saving local storage", e);
    return [];
  }
};

export const getFavourites = () => {
  try {
    const data = localStorage.getItem(LOCAL_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Error fetching local storage", e);
    return [];
  }
};

export const clearFavourites = () => {
  try {
    localStorage.removeItem(LOCAL_KEY);
  } catch (e) {
    console.error("Error clearing local storage", e);
  }
};
