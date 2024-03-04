import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const KEY = "_QDuxcVaisdf2BFsbnmM6BzSMfbxuEXAT2pviIdC5jY";

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: searchQuery,
      client_id: KEY,
      page,
      per_page: 12,
    },
  });
  return response.data.results;
};
