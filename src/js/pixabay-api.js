export const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "43145769-689aec7891323b7b1f2441531";

export const options = {
  params: {
    key: API_KEY,
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
