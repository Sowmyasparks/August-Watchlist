const LOCAL_KEY = "augustFav";
export const saveFavourite = (data) => {
  try {
    const prevFav = JSON.parse(localStorage.getItem(LOCAL_KEY));
    let updatedFav = [];
    if (prevFav) {
      updatedFav = [...prevFav, data];
    } else {
      updatedFav = [data];
    }
  
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedFav));
  } catch(e) {
    console.error("Error saving local storage", e);
    return [];
      }
 
};

export const getFavourites = () => {
  try {
    const data = localStorage.getItem(LOCAL_KEY);
    return data ? JSON.parse(data): [];
  } catch(e) {
console.error("Error fetching local storage", e);
return [];
  }
  
};


export const clearFavourites = () => {
  try {
localStorage.removeItem(LOCAL_KEY)
  } catch(e) {
console.error("Error clearing local storage",e);
  }
}