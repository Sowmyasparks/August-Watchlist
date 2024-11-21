import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";

export const searchVideos = async (searchKey) => {
  try {
    const resp = await axios.get(`${YOUTUBE_URL}/search`, {
      params: {
        part: "snippet",
        q: searchKey,
        key: API_KEY,
        maxResults: 8,
      },
    });
    return resp.data.items;
  } catch (err) {
    console.error("Error fetching search results", err);
    return [];
  }
};
